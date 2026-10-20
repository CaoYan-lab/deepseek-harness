---
description: "用于 Web 原型构建的 Desktop Agent 品牌填充。"
kind: "package-reference"
---

# @deepseek-ai/dsh-client-ui-brand-desktop-agent

[English](README.md) | 中文

## 概述

本包为 `prototype` 客户端构建提供临时的 Desktop Agent 品牌身份。它填充通用的侧栏标志、侧栏名称和会话首屏标志 slot，同时不修改 DeepSeek Harness 官方品牌包。

## 目录

- [使用本包](#use-this-package)
- [模型体验](#model-experience)
- [已知限制与延期工作](#known-limitations-and-deferred-work)
- [开发备注](#dev-note)

## 使用本包

<a id="use-this-package"></a>

将本包保留在 Web 浏览器插件名单中，并使用 `prototype` 客户端 profile 构建。该 profile 会设置 `DSH_CLIENT_BUILD_PROFILE=prototype` 和 `DSH_CLIENT_TITLE=Desktop Agent`；其他 profile 仍会加载本包，但不会填充这三个 slot。

浏览器半部将所有填充作为一个声明感知的集合安装。无论声明包先于还是晚于本包激活，它都能正常工作；声明消失时会撤回完整集合，并随 Cordis 插件 fiber 一同卸载。

<a id="model-experience"></a>
## 模型体验

无，因为本包只贡献浏览器呈现；这里没有任何内容进入模型请求。

#### KV Cache 影响

无；本包既不组装也不发送提供方请求。

## 已知限制与延期工作

<a id="known-limitations-and-deferred-work"></a>

- **临时身份** — 永久产品名称和最终品牌图形应替换本包的可见呈现，而无需更改 slot 契约。

### 开发备注

<a id="dev-note"></a>

[按 profile 隔离的原型品牌决策](../../../.agents/notes/implemented/architecture/2026-10-19-desktop-agent-prototype-brand.zh.md)说明本包为何与官方品牌分离。
