"use client";
import { useEffect, useState } from "react";

const SESSION_KEY = "ace_traffic_source";

function detectSource(): string {
  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get("utm_source")?.toLowerCase();
  const utmMedium = params.get("utm_medium")?.toLowerCase();

  if (utmSource === "facebook" || utmSource === "meta") return "[FB-ADS]";
  if (utmSource === "google") return "[GG-ADS]";
  if (utmSource === "instagram" && utmMedium === "bio") return "[IG-BIO]";
  if (utmSource === "instagram") return "[IG-ADS]";
  if (utmSource === "tiktok") return "[TK-ADS]";
  if (utmSource) return `[${utmSource.toUpperCase()}]`;

  const ref = document.referrer;
  if (ref.includes("facebook.com") || ref.includes("fb.com")) return "[FB-ORG]";
  if (ref.includes("instagram.com")) return "[IG-ORG]";
  if (ref.includes("google.com")) return "[GG-ORG]";
  if (ref) return "[REF]";

  return "[DIR]";
}

export function useTrafficSource(): string {
  const [source, setSource] = useState("");

  useEffect(() => {
    const hasUtm = new URLSearchParams(window.location.search).has("utm_source");
    if (!hasUtm) {
      const stored = sessionStorage.getItem(SESSION_KEY);
      if (stored) {
        setSource(stored);
        return;
      }
    }
    const detected = detectSource();
    sessionStorage.setItem(SESSION_KEY, detected);
    setSource(detected);
  }, []);

  return source;
}
