export function renderTemplate(template: string, data: any) {
  return template.replace(/{{(.*?)}}/g, (_, key) => {
    return data[key.trim()] || "";
  });
}

export function extractVariables(template: string): string[] {
  const matches = template.match(/{{(.*?)}}/g) || [];

  return matches.map((match) =>
    match.replace(/{{|}}/g, "").trim()
  );
}