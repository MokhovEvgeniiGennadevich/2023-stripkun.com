export default defineEventHandler((event) => {
  const name = getRouterParam(event, "name");

  const hello = `Hello, ${name}!`;

  return { result: "success", message: hello };
});
