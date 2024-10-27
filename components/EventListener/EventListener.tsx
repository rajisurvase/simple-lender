"use client"
import useEventEmitter from "@/hooks/useEventEmitter";
import events from "@/json/events/events";
import { useCallback } from "react";
import { toast } from "sonner";

export default function EventListeners() {
  // useUser();
  const showNotifications = useCallback(
    (data: {
      message: string;
      options: { variant: "error" | "success" | "warning" };
    }) => {
      if (data.options?.variant === "error") {
        toast.error(data.message);
      }

      if (data.options?.variant === "success") {
        toast.success(data.message);
      }

      if (data.options?.variant === "warning") {
        toast.error(data.message);
      }
    },
    []
  );

  useEventEmitter(events.showNotification, showNotifications);

  return null;
}
