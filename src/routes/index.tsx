import { createFileRoute } from "@tanstack/react-router";
import WorthySite from "../WorthySite";

export const Route = createFileRoute("/")({
  component: WorthySite,
});
