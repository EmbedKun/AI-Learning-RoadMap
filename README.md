# AI Learning Roadmap

> A full-stack roadmap for learning AI from first principles to models, systems, infra, and products.  
> Author: **Minkun Xue**

## Why This Roadmap Exists

这不是一份只教你“怎么调 API”的清单，也不是一份只适合研究论文阅读的学术目录。  
它试图回答一个更完整的问题：

- 能否把 AI 当成一个完整系统来理解，而不只是一个模型
- 能否同时理解模型能力、系统约束、工程代价和产品落地
- 能否从“会用”走到“会做”，再走到“会权衡”和“会判断”

我希望这份路线图最终帮助自己形成下面这套能力闭环：

- 能讲清 AI 五层：能源/数据中心 -> 芯片/GPU -> Infra/系统 -> 模型 -> 应用
- 能写代码：Python / PyTorch / CUDA / 服务代码
- 能做实验：训练、推理、profiling、benchmark
- 能部署系统：单机、多机、服务化、观测
- 能做权衡：精度、吞吐、时延、成本、能耗
- 能读懂最新论文并落地成代码或系统设计
- 能读懂最新博客/趋势/技术分析
- 能在组会、饭局、演讲、研讨会中讲清技术脉络
- 能创造真实价值

## Who This Is For

这份 roadmap 适合下面几类学习者：

- 想从“会用 AI 工具”走向“理解 AI 技术栈”的工程师
- 想补齐模型、系统、基础设施和产品视角的学生或研究者
- 想从应用层向下看清模型与 infra 的产品/工程负责人
- 想从单点能力走向 AI 全栈判断力的人

## The Big Picture

![The Big Picture](./AI-learning-flow-diagram.svg)

如果只能记住一张图，那就是这张五层图：

![AI Five-layer Stack](./AI的五层-能源-芯片-infra-模型-应用.png)

真正的 AI 判断力，来自于能在这些层之间来回切换视角。

## How To Use This Roadmap

1. 不要试图一次学完全部内容，先选一条主线，再选一条辅助线。
2. 每学一个模块，都要产出可以验证的结果：笔记、代码、实验、分享、系统设计或 demo。
3. 只看论文不写代码，知识会漂；只写代码不看系统约束，判断会浅。
4. 每完成一个阶段，都要回答三个问题：
   1. 我已经理解了哪些第一性原理？
   2. 我能独立做出什么？
   3. 我还缺哪一层视角？
5. 这份文档是 roadmap，不是课表。顺序是建议，不是唯一答案。

## Suggested Learning Journey

### Phase 0. Build the Mental Model

- 先建立历史视角、术语体系和 AI 五层地图
- 能解释“从规则到统计、从特征工程到表示学习、从监督学习到自监督”的变化
- 知道自己更偏模型、系统、应用还是 infra

### Phase 1. Foundations First

- 数学基础、经典机器学习、误差分析、优化基础
- 用 NumPy 或 PyTorch 手写简单网络
- 理解训练、验证、测试、过拟合和偏差-方差权衡

### Phase 2. Learn Modern Deep Learning

- 神经网络核心机制
- 优化与训练技巧
- CNN / RNN / seq2seq / attention / Transformer 的演化逻辑
- 强化学习基础与大模型对齐的关系

### Phase 3. Enter the LLM Era

- NLP 基础、Transformer 主干、预训练与对齐
- 微调、RAG、Agent、推理增强、高效化
- 至少能做一个小型 LLM 应用和一次模型实验

### Phase 4. Go Down the Stack

- GPU、精度、内存、通信、并行、分布式训练与推理
- 数据中心、功耗、成本、网络、调度与服务化
- 能把“模型效果”翻译成“系统代价”

### Phase 5. Build Real Products

- MLOps / LLMOps、评测、服务观测、质量治理
- AI 应用开发、工作流、前后端协作、企业级安全
- 从功能 demo 走到可上线系统

### Phase 6. Develop Taste

- 长期追踪前沿方向、顶会、技术报告和高质量博客
- 能判断什么是真趋势，什么只是噪音
- 形成自己的研究兴趣或工程方向

## Milestone Projects

### Milestone 1. From Scratch Neural Network

- 用 Python / NumPy 手写前向传播、反向传播和简单优化器
- 训练一个小型分类模型，并完成误差分析

### Milestone 2. Train and Understand Modern Architectures

- 用 PyTorch 复现一个 MLP / CNN / RNN / Transformer 小实验
- 记录训练曲线、显存、吞吐和精度变化

### Milestone 3. Build a Small LLM Workflow

- 做一个最小可用的 RAG 或 Agent 原型
- 能解释 Prompt、Retrieval、Rerank、Generation、Evaluation 的关系

### Milestone 4. Touch the System Layer

- 跑通多 GPU 训练或推理
- 使用 profiler 找到至少一个性能瓶颈并解释原因

### Milestone 5. Ship an AI Product

- 做一个可演示、可部署、可观测的 AI 应用
- 能说明它的成本、时延、质量和安全设计

## Reference Roadmaps

- [AI Infra from Zero to Hero](https://github.com/HuaizhengZhang/AI-Infra-from-Zero-to-Hero)
- [LLM Course](https://github.com/mlabonne/llm-course)
- [Awesome MLOps](https://github.com/kelvins/awesome-mlops)

---

## Part I. Foundations | 基础底座

### 1. History and Intellectual Lineage | 历史与思想脉络

> Goal: 建立 AI 的历史感，理解每一次范式转移背后的假设变化。  
> Deliverable: 写一篇综述，或者做一次 10 分钟分享，讲清 AI 的几次浪潮与瓶颈。

- 达特茅斯会议（1956）
- 物理符号系统假说
- 通用问题求解器（GPS）
- 专家系统：知识库、推理机、规则系统
- LISP 与早期 AI 编程思想
- 感知器
- 从知识驱动到数据驱动的范式转变
- 从特征工程到表示学习
- 从监督学习到自监督学习与生成式 AI
- AI 发展的几次浪潮与瓶颈

### 2. Mathematics and Classical Machine Learning | 数学与经典机器学习

> Goal: 建立所有后续模块的数学和统计基础。  
> Deliverable: 能独立推导基础模型、损失函数与优化过程。

#### 2.1 Mathematics | 数学基础

- 线性代数
- 微积分
- 概率论与统计
- 信息论基础
- 最优化基础
- 矩阵微分
- SVD / 特征值分解
- 拉格朗日乘子与对偶
- 凸优化基础

#### 2.2 Classical Machine Learning | 经典机器学习

- 有监督 / 无监督 / 半监督学习
- 线性回归 / 逻辑回归
- 决策树 / 随机森林 / AdaBoost / 集成学习
- SVM / 核函数
- 贝叶斯网络 / 概率图模型
- 隐马尔可夫模型（HMM）/ 马尔可夫随机场（MRF）
- 流形学习 / 度量学习 / 稀疏学习 / 压缩感知
- 遗传算法
- 模仿学习
- 强化学习与动态规划基础

#### 2.3 Implementation Skills | 实现能力

- 前向传播手动推导
- 反向传播手动推导
- 用 Python / NumPy 手写简单神经网络
- 训练、验证、测试的基本范式
- 过拟合 / 欠拟合分析
- 偏差-方差权衡

### 3. Deep Learning Core | 深度学习核心

> Goal: 理解现代深度学习为何有效，以及训练为什么稳定或不稳定。  
> Deliverable: 能独立讲清一个训练栈的组成，并实现一个完整实验。

#### 3.1 Basic Mechanisms | 基础机制

- 神经元工作原理
- 多层感知机（MLP）
- 激活函数：Sigmoid / Tanh / ReLU / GELU
- 损失函数
- 参数初始化
- 梯度消失与梯度爆炸
- 残差连接
- 归一化方法：BatchNorm / LayerNorm / RMSNorm
- 正则化：Dropout / 权重衰减

#### 3.2 Optimization and Training | 优化与训练

- SGD / Momentum / RMSProp / Adam / AdamW
- 学习率调度
- 梯度裁剪
- Mixed Precision Training
- Loss Scaling
- Checkpointing
- Activation Checkpointing

#### 3.3 Canonical Architectures | 经典网络

- CNN：LeNet / AlexNet / VGG / ResNet / Inception
- RNN / LSTM / GRU
- AutoEncoder / VAE / GAN
- seq2seq

#### 3.4 Training Paradigms | 训练范式

- 预训练
- 迁移学习
- 微调
- 自监督学习基础
- 联邦学习（了解）
- 强化学习

### 4. Reinforcement Learning | 强化学习

> Goal: 理解序贯决策和大模型对齐之间的桥梁。  
> Deliverable: 能解释 PPO、RLHF 与 Agent 决策流程的关系。

#### 4.1 Basic Theory | 基础理论

- Bandit
- MDP
- Bellman 方程
- 动态规划
- Temporal Difference

#### 4.2 Mainstream Methods | 主流方法

- Q-Learning / DQN
- Policy Gradient
- Actor-Critic
- PPO
- Offline RL
- Model-based RL（了解）

#### 4.3 RL in the LLM Era | 与大模型的关系

- RLHF
- Reward Modeling
- Agent 与 RL 的关系
- Tool-use / planning 中的序贯决策视角

---

## Part II. Models | 模型世界

### 5. NLP and Large Language Models | 自然语言处理与大模型

> Goal: 建立从 NLP 基础到现代 LLM 的完整认知链条。  
> Deliverable: 能独立实现或复现一个小型 LLM 工作流。

#### 5.1 NLP Basics | NLP 基础

- Token / Tokenization
- Embedding / Word2Vec
- 位置编码
- 注意力 / 自注意力 / 多头注意力

#### 5.2 Transformer Backbone | Transformer 主干

- Transformer 整体结构
- Encoder / Decoder
- FFN / Gated MLP
- Pre-Norm / Post-Norm
- RoPE / ALiBi
- KV Cache
- 长上下文机制
- FlashAttention

#### 5.3 Pretraining and Foundation Models | 预训练与基础模型

- BERT
- GPT 系列思想
- MLM / NSP / 自回归建模
- Scale Law
- 数据 / 参数 / token 关系

#### 5.4 Fine-tuning and Alignment | 微调与对齐

- SFT
- 全参数微调
- PEFT / Adapter / LoRA / QLoRA
- RLHF
- Reward Model
- DPO
- 模型安全与行为控制

#### 5.5 Efficiency | 高效化

- 量化
- 剪枝
- 蒸馏
- 稀疏化
- MoE
- 训练加速 / 推理加速
- 训练与推理的区别

#### 5.6 RAG and Agents | RAG 与 Agent

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

### 6. Computer Vision, Multimodality, and Generative Models | 计算机视觉、多模态与生成模型

> Goal: 建立从视觉基础到多模态系统的主线理解。  
> Deliverable: 能看懂 VLM 架构图，并做一个图文或文生图 demo。

#### 6.1 Vision Basics | 视觉基础

- ImageNet
- 目标检测基础
- R-CNN / Fast R-CNN / Faster R-CNN
- YOLO
- 语义分割基础
- ViT（Vision Transformer）

#### 6.2 Multimodality | 多模态

- 多模态基础
- CLIP
- Vision Encoder + LLM 架构
- VLM（视觉语言模型）
- OCR / 文档理解基础
- 图文对齐
- 多模态 RAG
- 多模态 Agent

#### 6.3 Generative Models | 生成模型

- GAN
- VAE
- 扩散模型
- Stable Diffusion
- DALL·E
- 文生图 / 图生图基本流程
- ControlNet

---

## Part III. Systems and Infra | 系统与基础设施

### 7. Energy, Data Centers, and Cost | 能源、数据中心与成本

> Goal: 理解 AI 不只是算法问题，也是电力、散热、机架、网络和成本问题。  
> Deliverable: 能对一个训练或推理场景做粗粒度成本分析。

#### 7.1 Power and Energy | 能源与供电基础

- 数据中心供电体系
- UPS / PDU 基本概念
- 机架功率密度
- GPU 集群功耗特征
- 电力约束与算力部署关系
- 峰值功耗、平均功耗与功率封顶（Power Cap）

#### 7.2 Cooling and Facilities | 散热与机房基础设施

- 风冷与液冷
- 冷板液冷
- 浸没式液冷（了解）
- 热设计功耗（TDP）
- 热点、热节流与降频
- 数据中心热管理基础

#### 7.3 Data Center Architecture | 数据中心架构

- 机架 / 列 / Pod / Zone 基本概念
- ToR / Spine / Leaf 基本结构
- 算力节点、存储节点、管理节点
- Scale-up 集群与 Scale-out 集群
- 供电、网络、散热三者协同

#### 7.4 Cost Models | 成本模型与经济性

- CAPEX / OPEX
- GPU 成本模型
- 网络成本模型
- 存储成本模型
- 训练成本估算
- 推理成本估算
- cost per training run
- cost per token
- cost per request
- 吞吐、时延、成本三者权衡

#### 7.5 Efficiency Metrics | 运营效率指标

- PUE
- 能耗利用效率
- GPU 利用率与成本摊薄
- 集群空转成本
- 调度效率对成本的影响
- 精度、并行策略、批处理对成本的影响

### 8. Hardware, Chips, Precision, and Low-level Compute | 硬件、芯片、精度与底层计算

> Goal: 建立 GPU 计算、内存和精度体系的底层直觉。  
> Deliverable: 能解释一个 kernel 为什么慢，或者一次训练为什么吃带宽。

#### 8.1 Architecture Overview | 体系结构总览

- CPU vs GPU
- 吞吐 vs 延迟导向
- Host / Device
- 异构计算
- SIMD / SIMT
- Roofline / Arithmetic Intensity

#### 8.2 Programming Model | 编程模型

- Thread / Warp / Block / Grid / Kernel
- Context / Stream / Event
- Host -> Device 执行流程
- 同步 / 异步执行

#### 8.3 Hardware Organization | 硬件组织

- GPC / TPC / SM
- CUDA Core / Tensor Core / SFU / LD-ST
- Warp Scheduler / Dispatch Unit
- Register File / Shared Memory / Cache / HBM

#### 8.4 Execution Mechanics | 执行机制

- Occupancy
- Latency Hiding
- Branch Divergence
- Predication
- Register Pressure
- Kernel launch 开销

#### 8.5 Memory System | 内存系统

- Global / Shared / Local / Constant / Texture
- Unified Memory
- Memory Coalescing
- Bank Conflict
- Atomic / Consistency Model

#### 8.6 Interconnect and Scaling | 互连与扩展

- PCIe / NVLink / NVSwitch
- GPUDirect RDMA
- CPU-GPU / GPU-GPU 通信
- NUMA
- Scale-up / Scale-out

#### 8.7 Precision System | 精度体系

- IEEE 754
- FP64 / FP32 / TF32 / BF16 / FP16 / FP8 / INT8 / INT4
- Dynamic Range / Rounding / Overflow / Underflow
- Mixed Precision / Loss Scaling / QAT
- 训推精度选择

#### 8.8 Core AI Operators | AI 核心算子

- GEMM / FMA / Convolution / Reduction
- Im2col / Winograd
- Attention Kernel / FlashAttention
- Sparse Tensor Core / Structured Sparsity / Transformer Engine

#### 8.9 Software Stack | 软件栈

- CUDA Runtime / Driver
- PTX / SASS / NVCC / JIT
- cuBLAS / cuDNN / CUTLASS / Triton
- PyTorch 调 CUDA 的链路

#### 8.10 Profiling | Profiling

- Nsight Systems / Nsight Compute / PyTorch Profiler
- Roofline
- 带宽瓶颈 / 时延分解 / 显存分析 / 成本分析

### 9. AI Infra, Networks, Distributed Training, and Inference | AI Infra：网络、通信、分布式训练与推理系统

> Goal: 看清大模型训练与推理背后的网络和分布式系统问题。  
> Deliverable: 能解释一次 all-reduce、一次推理请求和一次并行策略选择。

#### 9.1 Cluster Networking | AI 集群网络

- Ethernet / InfiniBand / RoCE / RDMA
- NIC / DMA
- Clos / Fat-Tree / Dragonfly / Torus
- ECMP / 多路径 / many-to-many / all-to-all

#### 9.2 Congestion and Performance | 拥塞与性能

- incast / 队列堆积 / 尾延迟
- ECN / PFC / DCQCN
- collective-aware routing
- 多租户隔离
- 拓扑感知调度

#### 9.3 Communication Primitives and Libraries | 通信原语与通信库

- collective communication
- all-reduce / all-gather / reduce-scatter / all-to-all
- ring / tree / hierarchical
- NCCL / UCX / MPI
- overlap / barrier / straggler

#### 9.4 Distributed Training | 分布式训练

- DP / TP / PP / EP / 3D 并行
- DDP / FSDP / DeepSpeed / ZeRO / Megatron / Horovod
- 梯度同步、压缩、计算通信重叠

#### 9.5 Inference Systems | 推理系统

- Prefill / Decode
- 动态批处理 / 连续批处理
- KV Cache / PagedAttention
- vLLM / TensorRT-LLM / Triton / ONNX Runtime
- speculative decoding / prefix caching

### 10. Frameworks, Compilers, Runtime, and Engineering | 框架、编译器、运行时与工程体系

> Goal: 理解高层框架和底层执行之间的桥梁。  
> Deliverable: 能看懂一个计算图或 kernel 优化链路。

#### 10.1 Deep Learning Frameworks | 深度学习框架

- PyTorch / TensorFlow / JAX
- 动态图 / 静态图 / 函数式编程
- Autograd
- 自定义算子

#### 10.2 Shared Principles | 框架共通原理

- 计算图
- 自动微分
- 张量内存布局
- Stride / Contiguous
- 算子调度 / 内存复用

#### 10.3 Compilers and IR | 编译器与 IR

- TVM / XLA / MLIR
- HLO / Relay IR / Dialect
- lowering / 图优化 / 融合 / 常量折叠 / 布局转换

#### 10.4 Kernel and Performance Optimization | Kernel 与性能优化

- CUDA Kernel
- CUTLASS / Triton
- 算子融合
- Memory-bound vs Compute-bound

### 11. Data, Storage, Scheduling, Serving, and MLOps | 数据、存储、调度、服务与 MLOps

> Goal: 学会把模型真正放进工程系统中运行。  
> Deliverable: 能设计一个可部署、可监控、可迭代的 AI 服务。

#### 11.1 Data and Storage | 数据与存储

- 对象存储 / HDFS / WebDataset / Parquet
- 缓存 / 预取 / 数据加载
- 离线 / 在线数据流
- Feature Store
- 数据版本管理

#### 11.2 Resource Scheduling | 资源调度

- Kubernetes / Ray / Kubeflow / Slurm
- 容器与集群
- 资源隔离
- MIG / vGPU

#### 11.3 Serving | 服务化

- FastAPI / gRPC
- API Gateway
- 负载均衡 / 健康检查 / 弹性伸缩
- 限流 / 熔断 / 重试
- 日志 / 指标 / Trace / SLA / SLO

#### 11.4 MLOps and LLMOps | MLOps / LLMOps

- MLflow / W&B / TensorBoard
- 模型注册 / 版本管理
- CI/CD
- 模型监控 / 漂移 / 回滚
- Prompt / Model / Retrieval 版本管理

#### 11.5 Evaluation and Benchmarking | 评测与 Benchmark

- 离线 / 在线评测
- 吞吐 / 时延 / 显存 / GPU 利用率
- 精度 / 幻觉 / RAG / Agent 评测
- 成本建模 / 能耗分析 / PUE 分析

---

## Part IV. Applications and Ecosystem | 应用与生态

### 12. AI Application Development | AI 应用开发：从模型到产品

> Goal: 学会把模型能力编织成真实用户价值。  
> Deliverable: 能完成一个从前端到服务端、从 Prompt 到监控的完整应用。

#### 12.1 Basic Architecture | 基础架构

- AI 应用基本架构
- 前后端与模型服务关系
- 请求链路
- Streaming
- 状态管理 / 多轮上下文

#### 12.2 Backend Development | 后端开发

- Prompt 模板
- 系统提示词设计
- 多模型路由
- 工具调用编排
- RAG 集成
- 缓存 / 重试 / 超时 / 降级
- 配额 / 限流 / 计费

#### 12.3 Frontend and Interaction | 前端与交互

- Chat UI
- 流式展示
- 文件上传 / 文档问答
- 多模态输入
- Agent 反馈与可解释性
- UX 基础

#### 12.4 Enterprise Scenarios | 企业级场景

- 文档问答 / 知识库 / Copilot
- 表单自动化 / 代码助手 / 数据分析助手
- 智能客服 / AI 搜索 / 工作流自动化

#### 12.5 Security and Quality | 安全与质量

- Prompt Injection
- 越权访问 / 数据泄漏
- 敏感信息过滤
- 内容安全
- 幻觉控制
- 审计日志 / Human-in-the-loop

#### 12.6 Evaluation and Operations | 评测与运营

- 用户满意度
- 任务成功率
- 首 token 时延 / 全响应时延
- A/B Test
- Prompt / Retrieval / Model 迭代
- 灰度发布

### 13. Tools and Platform Ecosystem | 工具类学习

> Goal: 熟悉主流产品、平台与工作流工具，并理解它们的适用边界。  
> Deliverable: 能根据场景选择最合适的工具链，而不是盲目追新。

#### 13.1 Foundation Model Products and Assistants | 大模型产品与助手

- ChatGPT
- Gemini
- Claude
- 豆包（Doubao）
- 通义千问（Qwen）
- DeepSeek
- Kimi
- GLM
- 阶跃星辰相关产品
- Seedance

#### 13.2 AI Coding and Developer Tools | AI Coding / 开发辅助工具

- Cursor
- Codex
- TRAE
- Coze（扣子）
- OpenHands / 类似开源 Agent Coding 工具
- vibe coding 的方法论与适用边界

#### 13.3 Open-source Models and Ecosystems | 开源模型与生态

- Llama 系列
- Qwen 系列
- DeepSeek 系列
- GLM 系列
- Mistral 系列
- Gemma 系列
- Stable Diffusion 生态
- Hugging Face 生态
- OpenClaw

#### 13.4 Application-building and Workflow Tools | AI 应用搭建与工作流工具

- Coze
- Dify
- LangChain
- LlamaIndex
- Flowise
- AutoGen

#### 13.5 Robotics and System Tools | 机器人与系统工具

- ROS
- ROS2
- Gazebo / Isaac Sim

#### 13.6 Others | 其它

- 华为超节点 ubmesh 报告
- AI 情感分析相关工具与方案
- 各家模型平台 API 使用与部署方式对比
- 不同产品在代码、文档、Agent、RAG 上的能力比较

### 14. Papers, Conferences, Communities, and Inputs | 论文、会议、社区与学习资源

> Goal: 建立长期输入机制和判断标准。  
> Deliverable: 形成自己的论文池、会议关注列表和信息摄取节奏。

#### 14.1 Landmark Papers | 经典论文

- 感知器 / AlexNet / ResNet / Transformer / BERT / Word2Vec / LSTM / GAN / AlphaGo / GPT / MoE / FlashAttention / LoRA / RLHF / DPO

#### 14.2 Top Conferences | 顶会

- NeurIPS / ICML / ICLR / CVPR / ICCV / ECCV / ACL / EMNLP / NAACL / MLSys / OSDI / SOSP / ASPLOS / MICRO / RSS / ICRA / IROS / AAAI

#### 14.3 Long-term Input Sources | 长期输入源

- Andrew Ng / Yann LeCun / 李飞飞 / 李沐 / Karpathy
- 吴恩达课程
- ArXiv 阅读习惯
- 高质量博客 / YouTube / 技术报告筛选能力

---

## Part V. Frontier | 前沿与交叉

### 15. Frontier and Cross-disciplinary Directions | 前沿、交叉与宏观方向

> Goal: 保持长期视角，知道 AI 可能往哪些更深的方向发展。  
> Deliverable: 形成自己的“长期关注清单”和季度研究主题。

- AGI
- 数据中心光电混合双平面
- CPO
- Chiplet / WaferScale 工艺
- 世界模型
- 具身智能
- AI Agent
- 类脑计算
- 量子计算与量子深度学习
- AI for Science
- 知识图谱
- 专家混合架构
- 机器人基础概念
- 动力学与运动学
- 机器人仿真
- 机器人决策算法
- 机器人运动控制 / VLA / VLN / 可信具身智能系统

---

## Suggested Role-based Tracks

### If You Lean Toward Model Engineering

- 优先完成：第 1-6 章，第 14 章
- 同时补：第 8-11 章中和训练、推理、评测相关的内容

### If You Lean Toward Infra and Systems

- 优先完成：第 7-11 章
- 同时补：第 3、5 章，尤其是训练和推理路径

### If You Lean Toward Product and Applications

- 优先完成：第 5、11、12、13、14 章
- 同时补：第 7 章和第 9 章中的成本、时延、吞吐约束

### If You Lean Toward Research

- 优先完成：第 1-6、14、15 章
- 同时补：第 8-11 章，避免研究判断脱离系统现实

## Open-source Notes

- 保持这份文档长期更新，而不是一次性列完清单
- 每完成一个阶段，补充推荐论文、课程、代码仓库和项目案例
- 如果未来拆仓库，建议把每一部分发展为独立目录或独立子项目

建议的仓库结构可以长这样：

```text
.
├── README.md
├── AI’s Learning List.md
├── scripts/
│   └── render-roadmap-pdf.mjs
├── package.json
└── AI-Learning-Roadmap-Minkun-Xue.pdf
```

## Build the Ebook

这份 roadmap 不只是 markdown，也可以被渲染成 PDF 电子书。

```bash
npm install
npm run build:pdf
```

默认输出文件：

- `AI-Learning-Roadmap-Minkun-Xue.pdf`

---

If this roadmap helps you, feel free to fork it, adapt it, and make it more opinionated for your own path.
