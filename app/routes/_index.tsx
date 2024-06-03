import type { MetaFunction } from "@remix-run/node";
import { Avatar, AvatarFallback, AvatarImage } from "~/component/ui/avatar";
import { Button } from "~/component/ui/button";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  return (
    <div>
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
        <h1>Welcome to Remix</h1>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Button>Click me</Button>
        <ul>
          <li>
            <a target="_blank" href="https://remix.run/tutorials/blog" rel="noreferrer">
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a target="_blank" href="https://remix.run/tutorials/jokes" rel="noreferrer">
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
              Remix Docs
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
