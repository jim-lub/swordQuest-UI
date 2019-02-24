import { useState, useEffect } from 'react';

export const useCooldown = (initialValue) => {
  const [cooldown, setCooldown] = useState(initialValue);

  const cooldownTimer = () => setCooldown(cooldown - 1);

  useEffect(() => {
    if (cooldown <= 0) return;

    const cooldownTimerID = setInterval(cooldownTimer, 1000);
    return () => clearInterval(cooldownTimerID);
  }, [cooldown]);


  return {
    cooldown,
    setCooldown
  }
}
