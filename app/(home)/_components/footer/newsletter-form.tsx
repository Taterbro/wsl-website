"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSubscribed(true);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5 flex gap-2">
      <label htmlFor="newsEmail" className="sr-only">
        Email address
      </label>
      <input
        id="newsEmail"
        type="email"
        placeholder="Email address"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="min-w-0 flex-1 rounded-[2px] border border-accent/20 bg-muted/6 px-[13px] py-[11px] font-sans text-[0.86rem] text-muted transition-colors duration-(--transition-fast) ease-(--ease-standard) placeholder:text-muted/50 focus:border-accent focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-[2px] border-0 bg-accent px-[18px] text-[0.76rem] font-semibold tracking-[0.05em] text-sidebar uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:bg-[#7defd2]"
      >
        {subscribed ? "Subscribed" : "Subscribe"}
      </button>
    </form>
  );
}
