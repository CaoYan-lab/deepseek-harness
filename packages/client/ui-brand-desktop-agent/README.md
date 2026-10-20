---
description: "Desktop Agent brand occupants for prototype Web builds."
kind: "package-reference"
---

# @deepseek-ai/dsh-client-ui-brand-desktop-agent

English | [中文](README.zh.md)

## Summary

This package gives a `prototype` client build the temporary Desktop Agent identity. It occupies the generic sidebar mark, sidebar name, and conversation hero mark slots without changing the official DeepSeek Harness package.

## Table of Contents

- [Use this package](#use-this-package)
- [Model Experience](#model-experience)
- [Known Limitations and Deferred Work](#known-limitations-and-deferred-work)
- [Dev Note](#dev-note)

## Use this package

<a id="use-this-package"></a>

Keep the package in the Web browser roster and build with the `prototype` client profile. The profile sets `DSH_CLIENT_BUILD_PROFILE=prototype` and `DSH_CLIENT_TITLE=Desktop Agent`; other profiles load the package but leave all three slots empty.

The browser half installs all occupants as one declaration-aware set. It works before or after the declaring packages activate, withdraws the complete set when a declaration collapses, and tears down with its Cordis plugin fiber.

<a id="model-experience"></a>
## Model Experience

None, as this package contributes browser presentation only; nothing here reaches a model request.

#### KV Cache effect

None; this package neither assembles nor sends a provider request.

## Known Limitations and Deferred Work

<a id="known-limitations-and-deferred-work"></a>

- **Temporary identity** — A permanent product name and final artwork should replace this package's visible presentation without changing the slot contract.

### Dev Note

<a id="dev-note"></a>

The [profile-gated prototype brand decision](../../../.agents/notes/implemented/architecture/2026-10-19-desktop-agent-prototype-brand.md) owns why this package remains separate from the official brand.
