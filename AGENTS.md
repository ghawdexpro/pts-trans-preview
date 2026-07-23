# Transporter — Codex Project Instructions

Follow the repository documentation and existing implementation conventions.

## Codex autonomy and browser routing

- This trusted repository uses `.codex/config.toml` with
  `approval_policy = "never"` and `sandbox_mode = "danger-full-access"` so
  Codex can complete local project work without tool-approval or sandbox
  interruptions.
- Use the built-in `@Browser` by default for public research, documentation,
  localhost, and local web testing that does not need the user's Chrome profile.
- Use `@Chrome` for existing tabs, authenticated sites, admin panels, and other
  account-bound workflows.
- Keep `chrome-devtools` MCP enabled globally for profile verification and
  low-level CDP diagnostics. Before work in the normal Chrome profile, verify it
  with `list_pages`.
- Maximum local execution autonomy does not itself authorize messages,
  publication, purchases, destructive external actions, commits, or pushes;
  those still require scope in the active task and any stricter project rules.
- Neither browser path is guaranteed to conceal automation. Hand off the final
  sensitive action to the user when avoiding automation disclosure or detection
  is materially important.
