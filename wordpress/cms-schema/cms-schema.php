<?php
/**
 * Plugin Name: CMS Schema
 */

// 1. Load generated field groups from our own folder
add_filter('acf/settings/load_json', function ($paths) {
    $paths[] = __DIR__ . '/acf-json';
    return $paths;
});

// 2. Register collections (project, team, ...) from the generated file
add_action('init', function () {
    $file = __DIR__ . '/post-types.json';
    if (!file_exists($file)) return;

    foreach (json_decode(file_get_contents($file), true) as $pt) {
        register_post_type($pt['slug'], [
            'label'        => $pt['label'],
            'public'       => true,
            'show_in_rest' => true,
            'supports'     => ['title', 'thumbnail'],
        ]);
    }
});

// 3. A "page slug" location rule, so a field group can attach to the page with slug "home"
add_filter('acf/location/rule_types', function ($choices) {
    $choices['Page']['page_slug'] = 'Page Slug';
    return $choices;
});

add_filter('acf/location/rule_match/page_slug', function ($result, $rule, $screen) {
    if (empty($screen['post_id'])) return true; // REST/schema lookups carry no post
    $slug = get_post_field('post_name', $screen['post_id']);
    return $rule['operator'] === '==' ? $slug === $rule['value'] : $slug !== $rule['value'];
}, 10, 3);