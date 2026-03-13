# Chapter 2. Models

_模型世界_

## NLP and Large Language Models | 自然语言处理与大模型

> Goal: 建立从 NLP 基础到现代 LLM 的完整认知链条。  
> Deliverable: 能独立实现或复现一个小型 LLM 工作流。

### NLP Basics | NLP 基础

- Token / Tokenization
- Embedding / Word2Vec
- 位置编码
- 注意力 / 自注意力 / 多头注意力

### Transformer Backbone | Transformer 主干

- Transformer 整体结构
- Encoder / Decoder
- FFN / Gated MLP
- Pre-Norm / Post-Norm
- RoPE / ALiBi
- KV Cache
- 长上下文机制
- FlashAttention

### Pretraining and Foundation Models | 预训练与基础模型

- BERT
- GPT 系列思想
- MLM / NSP / 自回归建模
- Scale Law
- 数据 / 参数 / token 关系

### Fine-tuning and Alignment | 微调与对齐

- SFT
- 全参数微调
- PEFT / Adapter / LoRA / QLoRA
- RLHF
- Reward Model
- DPO
- 模型安全与行为控制

### Efficiency | 高效化

- 量化
- 剪枝
- 蒸馏
- 稀疏化
- MoE
- 训练加速 / 推理加速
- 训练与推理的区别

### RAG and Agents | RAG 与 Agent

- Prompt Engineering
- 思维链
- RAG
- Chunking
- Embedding 模型选择
- Reranker
- 向量数据库
- Function Calling
- Agent 基础
- Agent 推理流程

## Computer Vision, Multimodality, and Generative Models | 计算机视觉、多模态与生成模型

> Goal: 建立从视觉基础到多模态系统的主线理解。  
> Deliverable: 能看懂 VLM 架构图，并做一个图文或文生图 demo。

### Vision Basics | 视觉基础

- ImageNet
- 目标检测基础
- R-CNN / Fast R-CNN / Faster R-CNN
- YOLO
- 语义分割基础
- ViT（Vision Transformer）

### Multimodality | 多模态

- 多模态基础
- CLIP
- Vision Encoder + LLM 架构
- VLM（视觉语言模型）
- OCR / 文档理解基础
- 图文对齐
- 多模态 RAG
- 多模态 Agent

### Generative Models | 生成模型

- GAN
- VAE
- 扩散模型
- Stable Diffusion
- DALL·E
- 文生图 / 图生图基本流程
- ControlNet
