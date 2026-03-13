# Systems and Infrastructure


## Energy, Data Centers, and Cost | 能源、数据中心与成本

> Goal: 理解 AI 不只是算法问题，也是电力、散热、机架、网络和成本问题。  
> Deliverable: 能对一个训练或推理场景做粗粒度成本分析。

### Power and Energy | 能源与供电基础

- 数据中心供电体系
- UPS / PDU 基本概念
- 机架功率密度
- GPU 集群功耗特征
- 电力约束与算力部署关系
- 峰值功耗、平均功耗与功率封顶（Power Cap）

### Cooling and Facilities | 散热与机房基础设施

- 风冷与液冷
- 冷板液冷
- 浸没式液冷（了解）
- 热设计功耗（TDP）
- 热点、热节流与降频
- 数据中心热管理基础

### Data Center Architecture | 数据中心架构

- 机架 / 列 / Pod / Zone 基本概念
- ToR / Spine / Leaf 基本结构
- 算力节点、存储节点、管理节点
- Scale-up 集群与 Scale-out 集群
- 供电、网络、散热三者协同

### Cost Models | 成本模型与经济性

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

### Efficiency Metrics | 运营效率指标

- PUE
- 能耗利用效率
- GPU 利用率与成本摊薄
- 集群空转成本
- 调度效率对成本的影响
- 精度、并行策略、批处理对成本的影响

## Hardware, Chips, Precision, and Low-level Compute | 硬件、芯片、精度与底层计算

> Goal: 建立 GPU 计算、内存和精度体系的底层直觉。  
> Deliverable: 能解释一个 kernel 为什么慢，或者一次训练为什么吃带宽。

### Architecture Overview | 体系结构总览

- CPU vs GPU
- 吞吐 vs 延迟导向
- Host / Device
- 异构计算
- SIMD / SIMT
- Roofline / Arithmetic Intensity

### Programming Model | 编程模型

- Thread / Warp / Block / Grid / Kernel
- Context / Stream / Event
- Host -> Device 执行流程
- 同步 / 异步执行

### Hardware Organization | 硬件组织

- GPC / TPC / SM
- CUDA Core / Tensor Core / SFU / LD-ST
- Warp Scheduler / Dispatch Unit
- Register File / Shared Memory / Cache / HBM

### Execution Mechanics | 执行机制

- Occupancy
- Latency Hiding
- Branch Divergence
- Predication
- Register Pressure
- Kernel launch 开销

### Memory System | 内存系统

- Global / Shared / Local / Constant / Texture
- Unified Memory
- Memory Coalescing
- Bank Conflict
- Atomic / Consistency Model

### Interconnect and Scaling | 互连与扩展

- PCIe / NVLink / NVSwitch
- GPUDirect RDMA
- CPU-GPU / GPU-GPU 通信
- NUMA
- Scale-up / Scale-out

### Precision System | 精度体系

- IEEE 754
- FP64 / FP32 / TF32 / BF16 / FP16 / FP8 / INT8 / INT4
- Dynamic Range / Rounding / Overflow / Underflow
- Mixed Precision / Loss Scaling / QAT
- 训推精度选择

### Core AI Operators | AI 核心算子

- GEMM / FMA / Convolution / Reduction
- Im2col / Winograd
- Attention Kernel / FlashAttention
- Sparse Tensor Core / Structured Sparsity / Transformer Engine

### Software Stack | 软件栈

- CUDA Runtime / Driver
- PTX / SASS / NVCC / JIT
- cuBLAS / cuDNN / CUTLASS / Triton
- PyTorch 调 CUDA 的链路

### Profiling | Profiling

- Nsight Systems / Nsight Compute / PyTorch Profiler
- Roofline
- 带宽瓶颈 / 时延分解 / 显存分析 / 成本分析

### AI Chip | AI芯片
- AI 芯片的动机：CPU / GPU / NPU / ASIC / FPGA 的区别
- AI 工作负载：GEMM / Convolution / Attention / KV Cache / Sparsity
- AI 芯片核心架构：PE / MAC / Systolic Array / Dataflow / NoC
- 存储系统：SRAM / HBM / Memory Hierarchy
- 设计目标：Performance / Power / Area（PPA）
- 系统扩展：封装 / Chiplet / HBM / die-to-die interconnect / WaferScale
- 软硬件协同：Compiler / Runtime / Mapping / Co-design
- 数据搬运成本高于计算成本
- 峰值算力高但利用率低
- 内存墙 / 带宽墙
- 功耗墙 / 热墙
- Transformer、MoE、KV Cache 等新负载对硬件不友好
- 专用化与通用化的矛盾
- 稀疏性硬件支持收益不稳定
- 封装、HBM、Chiplet 已成为架构设计的一部分
- 软硬件协同设计

## AI Infra, Networks, Distributed Training, and Inference | AI Infra：网络、通信、分布式训练与推理系统

> Goal: 看清大模型训练与推理背后的网络和分布式系统问题。  
> Deliverable: 能解释一次 all-reduce、一次推理请求和一次并行策略选择。

### Cluster Networking | AI 集群网络

- Ethernet / InfiniBand / RoCE / RDMA
- NIC / DMA
- Clos / Fat-Tree / Dragonfly / Torus
- ECMP / 多路径 / many-to-many / all-to-all

### Congestion and Performance | 拥塞与性能

- incast / 队列堆积 / 尾延迟
- ECN / PFC / DCQCN
- collective-aware routing
- 多租户隔离
- 拓扑感知调度

### Communication Primitives and Libraries | 通信原语与通信库

- collective communication
- all-reduce / all-gather / reduce-scatter / all-to-all
- ring / tree / hierarchical
- NCCL / UCX / MPI
- overlap / barrier / straggler

### Distributed Training | 分布式训练

- DP / TP / PP / EP / 3D 并行
- DDP / FSDP / DeepSpeed / ZeRO / Megatron / Horovod
- 梯度同步、压缩、计算通信重叠

### Inference Systems | 推理系统

- Prefill / Decode
- 动态批处理 / 连续批处理
- KV Cache / PagedAttention
- vLLM / TensorRT-LLM / Triton / ONNX Runtime
- speculative decoding / prefix caching

## Frameworks, Compilers, Runtime, and Engineering | 框架、编译器、运行时与工程体系

> Goal: 理解高层框架和底层执行之间的桥梁。  
> Deliverable: 能看懂一个计算图或 kernel 优化链路。

### Deep Learning Frameworks | 深度学习框架

- PyTorch / TensorFlow / JAX
- 动态图 / 静态图 / 函数式编程
- Autograd
- 自定义算子

### Shared Principles | 框架共通原理

- 计算图
- 自动微分
- 张量内存布局
- Stride / Contiguous
- 算子调度 / 内存复用

### Compilers and IR | 编译器与 IR

- TVM / XLA / MLIR
- HLO / Relay IR / Dialect
- lowering / 图优化 / 融合 / 常量折叠 / 布局转换

### Kernel and Performance Optimization | Kernel 与性能优化

- CUDA Kernel
- CUTLASS / Triton
- 算子融合
- Memory-bound vs Compute-bound

## Data, Storage, Scheduling, Serving, and MLOps | 数据、存储、调度、服务与 MLOps

> Goal: 学会把模型真正放进工程系统中运行。  
> Deliverable: 能设计一个可部署、可监控、可迭代的 AI 服务。

### Data and Storage | 数据与存储

- 对象存储 / HDFS / WebDataset / Parquet
- 缓存 / 预取 / 数据加载
- 离线 / 在线数据流
- Feature Store
- 数据版本管理

### Resource Scheduling | 资源调度

- Kubernetes / Ray / Kubeflow / Slurm
- 容器与集群
- 资源隔离
- MIG / vGPU

### Serving | 服务化

- FastAPI / gRPC
- API Gateway
- 负载均衡 / 健康检查 / 弹性伸缩
- 限流 / 熔断 / 重试
- 日志 / 指标 / Trace / SLA / SLO

### MLOps and LLMOps | MLOps / LLMOps

- MLflow / W&B / TensorBoard
- 模型注册 / 版本管理
- CI/CD
- 模型监控 / 漂移 / 回滚
- Prompt / Model / Retrieval 版本管理

### Evaluation and Benchmarking | 评测与 Benchmark

- 离线 / 在线评测
- 吞吐 / 时延 / 显存 / GPU 利用率
- 精度 / 幻觉 / RAG / Agent 评测
- 成本建模 / 能耗分析 / PUE 分析
