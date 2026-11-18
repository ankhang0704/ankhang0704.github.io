export interface ArchitectureLayer {
  tier: string;
  name: string;
  tag: string;
  components: string[];
  responsibilities: string[];
  invariants: string[];
  protocols: string[];
  errorHandling: string;
}

export interface PipelineStage {
  step: string;
  name: string;
  tag: string;
  description: string;
  input: string;
  output: string;
  invariants: string;
}

export interface ProjectArchitecture {
  id: string; // matches project slug e.g. 'fm-dictionary'
  code: string; // e.g. 'PRJ-01'
  title: string;
  badge: string;
  summary: string;
  keyMetrics: { label: string; value: string }[];
  layers: ArchitectureLayer[];
  pipeline?: PipelineStage[];
  pipelineTitle?: string;
  pipelineDescription?: string;
}

export const architecturesEn: Record<string, ProjectArchitecture> = {
  "fm-dictionary": {
    id: "fm-dictionary",
    code: "PRJ-01",
    title: "3-Tier Offline-First Edge Topology",
    badge: "SYSTEM ARCHITECTURE · 3 TIERS",
    summary:
      "A resilient tripartite architecture balancing local binary execution on device with authenticated edge audio caching and lazy cloud persistence.",
    keyMetrics: [
      { label: "Search Latency", value: "< 5ms (Local Hive)" },
      { label: "Offline Resilience", value: "100% Zero-Cloud Dependency" },
      { label: "Vocabulary Scale", value: "1,847 Specialized FM Terms" },
      { label: "Secret Isolation", value: "Cloudflare Edge Cloaking" },
    ],
    layers: [
      {
        tier: "TIER 01",
        name: "Client Runtime (Flutter + Dart)",
        tag: "LOCAL-FIRST CORE",
        components: [
          "Hive Binary Boxes (1,847 Terms pre-indexed)",
          "Leitner Spaced-Repetition State Engine",
          "Rule-Based On-Device Phonetic Rubric",
          "Audio Asset Disk Cache",
        ],
        responsibilities: [
          "Execute sub-5ms lexical and phonetic searches completely in-memory",
          "Manage flashcard review intervals and streak counters without network roundtrips",
          "Evaluate learner speech waveforms locally against acoustic dictionary rubrics",
        ],
        invariants: [
          "Zero network dependency for reading, search, and quiz operations",
          "Atomic local schema staging: downloads write to temporary rollback box before swapping",
          "Encrypted local device storage with zero ad-tech or commercial trackers",
        ],
        protocols: [
          "Native Dart FFI",
          "Binary In-Memory Bus",
          "Device Audio API",
        ],
        errorHandling:
          "Automatic instant fallback to bundled asset dictionary if user storage space is corrupt or restricted.",
      },
      {
        tier: "TIER 02",
        name: "Edge Gateway (Cloudflare Workers)",
        tag: "AUTHENTICATED PROXY",
        components: [
          "Worldwide Audio CDN Edge Cache",
          "Token Validation & Upstream Secret Cloaker",
          "Rate-Limiting & Traffic Throttler",
          "Provider Failover Router",
        ],
        responsibilities: [
          "Shield third-party speech API keys from extraction out of mobile client binaries",
          "Serve pre-computed pronunciation audio from regional edge nodes with sub-50ms TTFB",
          "Enforce per-user quota controls to mitigate denial-of-wallet vectors",
        ],
        invariants: [
          "Client application binaries contain zero private vendor credentials",
          "All cached audio binaries verified with upstream SHA-256 checksums",
        ],
        protocols: ["HTTPS / TLS 1.3", "Bearer Token Auth", "Edge Cache API"],
        errorHandling:
          "Transparent secondary routing to fallback audio synthesis providers if the primary endpoint encounters throttling (HTTP 429) or degradation.",
      },
      {
        tier: "TIER 03",
        name: "Persistence & Sync Boundary (Firebase)",
        tag: "NON-BLOCKING PERSISTENCE",
        components: [
          "Anonymous & Email Credential Manager",
          "Firestore Lazy Bookmark & Mastery Sync",
          "Realtime Database (RTDB) Leaderboard Engine",
        ],
        responsibilities: [
          "Enable friction-free zero-onboarding guest usage with seamless upgrade to email credentials",
          "Lazily push bookmarked terms and study progress when network becomes available",
          "Maintain lightweight global cohort learning streaks without blocking main UI thread",
        ],
        invariants: [
          "Cloud connection outages or Firebase downtime never freeze or degrade local dictionary browsing",
          "Writes queue locally until connectivity is established (Eventual Consistency)",
        ],
        protocols: ["Secure WebSockets", "Google Cloud gRPC", "OAuth2.0 / JWT"],
        errorHandling:
          "Exponential backoff retry with deterministic timestamp-based conflict resolution (last-write-wins).",
      },
    ],
    pipelineTitle: "Tripartite Data Flow & Sync Lifecycle",
    pipelineDescription:
      "How user interactions flow through the offline core, authenticated edge proxy, and non-blocking cloud boundaries.",
    pipeline: [
      {
        step: "FLOW 01",
        name: "Lexical Search & Study",
        tag: "LOCAL LOOKUP",
        description:
          "User queries a term or takes a Leitner spaced-repetition quiz. Query resolves immediately inside local Hive binary boxes.",
        input: "User keystroke or quiz answer",
        output: "Rendered term definition & quiz score in < 5ms",
        invariants: "0 network calls made; 100% offline operable",
      },
      {
        step: "FLOW 02",
        name: "Pronunciation Audio",
        tag: "EDGE CACHE DISPATCH",
        description:
          "User plays term pronunciation. Audio is checked in local disk cache, then fetched via Cloudflare Edge Worker with CDN caching.",
        input: "Audio play request (Term ID)",
        output: "Streamed audio bytes + local cache entry",
        invariants:
          "Private API keys cloaked; global edge CDN delivers < 50ms TTFB",
      },
      {
        step: "FLOW 03",
        name: "Progress Synchronization",
        tag: "ASYNC PERSISTENCE",
        description:
          "Quiz completion updates local streak state. Sync dispatcher queues telemetry to Firestore and RTDB asynchronously.",
        input: "Study session completion payload",
        output: "Cloud backup committed & leaderboard updated",
        invariants:
          "Fails silently to local queue if offline; zero UI blocking",
      },
    ],
  },

  "github-vault-relay": {
    id: "github-vault-relay",
    code: "PRJ-02",
    title: "6-Stage Deterministic Sync Pipeline",
    badge: "PIPELINE TOPOLOGY · MOBILE-FIRST",
    summary:
      "A deterministic synchronization bridge operating directly over GitHub Git Data REST API without requiring git binaries, shell environments, or relay intermediaries.",
    keyMetrics: [
      { label: "Sync Architecture", value: "Direct HTTPS Tree Sync" },
      { label: "Intermediaries", value: "Zero (Peer-to-GitHub)" },
      { label: "Execution Model", value: "100% User-Directed" },
      { label: "Conflict Guard", value: "Deterministic 3-Way Diff" },
    ],
    layers: [
      {
        tier: "LAYER 01",
        name: "Obsidian Client Vault (Mobile / Desktop)",
        tag: "LOCAL CLIENT RUNTIME",
        components: [
          "Obsidian Plugin UI & Settings View",
          "File System Adapter & In-Memory SHA-256 Mapper",
          "Sync Status Bar & Manual Trigger Controls",
        ],
        responsibilities: [
          "Provide one-tap user-directed synchronization interface",
          "Safely store Personal Access Tokens (PAT) locally in encrypted plugin storage",
          "Notify users of ambiguous conflict notes requiring manual inspection",
        ],
        invariants: [
          "No automated silent background syncs that could race with active typing",
          "Local PAT credentials never leave the client device",
        ],
        protocols: ["Obsidian Plugin API", "Node.js fs / Mobile FS Adapter"],
        errorHandling:
          "Immediate error toast with actionable guidance if credentials expire or file locks are encountered.",
      },
      {
        tier: "LAYER 02",
        name: "Deterministic Sync Engine (TypeScript)",
        tag: "CORE ALGORITHM",
        components: [
          "Inventory Scanner & Ignore Engine",
          "Three-Way Diff State Machine",
          "Transactional Rollback Journal",
          "Post-Pull Integrity Validator",
        ],
        responsibilities: [
          "Classify all vault files into unambiguous sync states (LOCAL_ONLY, REMOTE_CHANGED, CONFLICT)",
          "Coordinate transactional downloads with safe rollback logging",
          "Construct atomic Git Tree objects and advance commit SHA baselines",
        ],
        invariants: [
          "Zero ambiguous file overwriting: conflicts isolate both versions into review copies",
          "Verification stage enforces strict on-disk hash matching before advancing commit cursor",
        ],
        protocols: ["Strict TypeScript", "Cryptographic SHA-256 Hasher"],
        errorHandling:
          "Automatic rollback of pulled files to pre-sync state if network fails mid-transfer.",
      },
      {
        tier: "LAYER 03",
        name: "Remote GitHub Repository (Git Data API)",
        tag: "REMOTE PERSISTENCE",
        components: [
          "GitHub Git Data REST API Endpoints",
          "Git Trees, Blobs, and Commits Graph",
          "Branch Reference Pointer (`refs/heads/main`)",
        ],
        responsibilities: [
          "Store immutable Git objects and history trees",
          "Fast-forward branch references on verified commit creations",
          "Enforce repository access controls and branch protection rules",
        ],
        invariants: [
          "Zero intermediary relay servers: data travels strictly between phone and GitHub",
          "Strict fast-forward safety prevents inadvertent history squashing",
        ],
        protocols: ["HTTPS / TLS 1.3", "GitHub REST API v3", "Git Data API"],
        errorHandling:
          "Detects remote upstream branch changes and aborts push if parent commit has diverged.",
      },
    ],
    pipelineTitle: "6-Stage Serialized Sync Lifecycle",
    pipelineDescription:
      "A strictly ordered, deterministic pipeline guaranteeing zero note corruption and zero silent overwrites.",
    pipeline: [
      {
        step: "STAGE 01",
        name: "Inventory & Tree Traversal",
        tag: "VAULT SCAN",
        description:
          "Recursively enumerates all user-visible markdown files and attachments within the vault, generating an in-memory SHA-256 state map.",
        input: "Local Obsidian Vault directory",
        output: "Physical file hash map (Path -> SHA-256)",
        invariants: "Read-only operation; zero disk modifications",
      },
      {
        step: "STAGE 02",
        name: "Three-Way Reconciliation",
        tag: "DIFF MATRIX",
        description:
          "Compares local hashes against baseline state.json and remote GitHub branch tree. Categorizes items into LOCAL_ONLY, REMOTE_ONLY, CHANGED, or CONFLICT.",
        input: "Local map + state.json + GitHub tree SHA",
        output: "Categorized sync action list",
        invariants:
          "Ambiguous diverged notes preserved into conflict review buckets",
      },
      {
        step: "STAGE 03",
        name: "Transactional Pull Stage",
        tag: "SAFE INGESTION",
        description:
          "Downloads remote blobs and commits to disk while recording every write into an active transaction rollback journal.",
        input: "Remote modified blob list",
        output: "Updated files on disk + transaction log",
        invariants:
          "Network failure triggers instant rollback to initial file state",
      },
      {
        step: "STAGE 04",
        name: "Post-Pull Integrity Verification",
        tag: "INTEGRITY ASSERTION",
        description:
          "Re-scans physical files on disk post-pull to assert that hashes match remote commit tree expectations before allowing stage 5.",
        input: "Physical disk state",
        output: "Verified integrity check boolean",
        invariants:
          "Pipeline halts immediately if hash mismatch or truncation detected",
      },
      {
        step: "STAGE 05",
        name: "Atomic Push Stage",
        tag: "REMOTE COMMIT",
        description:
          "Uploads missing blobs via Git Data API, constructs a new tree object linked to remote parent SHA, and creates an atomic Git commit.",
        input: "Local changes & parent commit SHA",
        output: "New remote commit SHA & updated branch ref",
        invariants: "Atomic tree generation; zero dirty partial commits",
      },
      {
        step: "STAGE 06",
        name: "State Cursor Advance",
        tag: "BASELINE RECORD",
        description:
          "Updates local state.json with new commit SHA and current file timestamps, marking synchronization successfully finalized.",
        input: "Verified commit SHA",
        output: "Persistent state.json updated",
        invariants: "Occurs strictly as the final step after verified push",
      },
    ],
  },

  "hotel-management": {
    id: "hotel-management",
    code: "PRJ-03",
    title: "Django MVT Monolith & Decoupled RAG Topology",
    badge: "BACKEND ARCHITECTURE · FULL STACK",
    summary:
      "A high-performance Python monolith utilizing SQLite in WAL mode for ACID reservation safety, combined with an auxiliary FAISS vector index for policy retrieval.",
    keyMetrics: [
      { label: "Architecture Core", value: "Server-Rendered Django MVT" },
      { label: "Storage Engine", value: "SQLite WAL Mode (ACID)" },
      { label: "Concurrency Guard", value: "select_for_update & Atomic" },
      { label: "AI Assistance", value: "In-Process FAISS Vector RAG" },
    ],
    layers: [
      {
        tier: "TIER 01",
        name: "Presentation & Role-Tailored Portals",
        tag: "DESK WORKSTATION UI",
        components: [
          "Server-Rendered HTML Templates",
          "Role-Specific Dashboards (Admin / Desk / Housekeeping)",
          "CSRF Guard & Secure Session Middleware",
        ],
        responsibilities: [
          "Deliver sub-50ms page renders with zero client-side JavaScript hydration delay",
          "Enforce visual access control based on user privileges and operational roles",
          "Guard desk workstations against CSRF attacks and session hijacking",
        ],
        invariants: [
          "Strict HTTPOnly and SameSite cookie policies",
          "Every state-mutating request requires valid CSRF token validation",
        ],
        protocols: ["HTTP/2 / HTTPS", "Session Cookies", "HTML5 Standard"],
        errorHandling:
          "Friendly error boundaries with actionable notices if desk actions violate room state constraints.",
      },
      {
        tier: "TIER 02",
        name: "Monolith Domain Engine (Django 5.x / Python 3.12)",
        tag: "CORE BUSINESS LOGIC",
        components: [
          "Date Overlap Room Availability Matrix",
          "Deterministic Booking Lifecycle State Machine",
          "ORM Query Optimization (select_related / prefetch_related)",
          "Concurrency Lock Manager (`select_for_update`)",
        ],
        responsibilities: [
          "Prevent double-booking across date ranges using mathematical interval overlap checks",
          "Coordinate reservation transitions: Quote -> Booked -> Checked-In -> Completed -> Cancelled",
          "Eliminate N+1 database roundtrips on heavy managerial accounting dashboards",
        ],
        invariants: [
          "No booking accepted without acquiring atomic row-level locks on inventory slots",
          "All status transitions strictly follow legal state machine transitions",
        ],
        protocols: ["Python WSGI / ASGI", "Django ORM Core"],
        errorHandling:
          "Automatic rollback within `transaction.atomic()` blocks upon constraint violation or payment failure.",
      },
      {
        tier: "TIER 03A",
        name: "Primary Persistence (SQLite in WAL Mode)",
        tag: "ACID STORAGE",
        components: [
          "Embedded SQLite 3 Engine",
          "Write-Ahead Logging (WAL) Mode",
          "Foreign Key Cascades & Range Constraints",
        ],
        responsibilities: [
          "Deliver microsecond read access for front-desk catalog and room inventory lookups",
          "Provide absolute ACID transaction safety with zero external database daemon overhead",
          "Allow concurrent readers while single writer commits state modifications",
        ],
        invariants: [
          "Write-Ahead Logging enabled for concurrency without locking reads",
          "Integrity check pragma verified at startup",
        ],
        protocols: ["Native C-API", "POSIX File Locking", "SQL Standard"],
        errorHandling:
          "Busy timeout handler with automatic retries if multiple desk workers write concurrently.",
      },
      {
        tier: "TIER 03B",
        name: "Auxiliary Vector RAG (FAISS + HuggingFace)",
        tag: "LOCAL SEMANTIC AI BUS",
        components: [
          "FAISS Flat-L2 Vector Store",
          "HuggingFace Pre-trained Embeddings",
          "Hotel Policy Document Ingestion Bus",
        ],
        responsibilities: [
          "Perform semantic similarity queries over complex resort policies, cancellation terms, and VIP amenities",
          "Deliver instant policy answers to desk staff without requiring external cloud LLM API access",
          "Operate completely in-process alongside Django runtime",
        ],
        invariants: [
          "Zero hotel proprietary documents or guest records sent to external cloud AI vendors",
          "Vector index runs completely offline in-memory",
        ],
        protocols: ["NumPy Array Buffer", "In-Memory Vector Search"],
        errorHandling:
          "Graceful fallback to keyword search if vector index is regenerating or unavailable.",
      },
    ],
    pipelineTitle: "Reservation & Room State Lifecycle",
    pipelineDescription:
      "Deterministic state transitions preventing double-bookings and maintaining room readiness.",
    pipeline: [
      {
        step: "STEP 01",
        name: "Availability Check",
        tag: "RANGE OVERLAP",
        description:
          "Guest selects check-in and check-out dates. System evaluates range overlap equation against all active bookings.",
        input: "Date range (CheckIn, CheckOut) + Room Type",
        output: "Available inventory slots count",
        invariants: "Evaluated in < 2ms via indexed SQL date filter",
      },
      {
        step: "STEP 02",
        name: "Atomic Lock & Booking",
        tag: "TRANSACTION LOCK",
        description:
          "Staff confirms reservation. Django enters `transaction.atomic()` and locks specific room rows with `select_for_update()`.",
        input: "Customer details + Room allocation",
        output: "Confirmed Reservation ID + Inventory decrement",
        invariants:
          "Double-booking mathematically impossible under concurrent clicks",
      },
      {
        step: "STEP 03",
        name: "Check-In & Key Issuance",
        tag: "STATE ADVANCE",
        description:
          "Front desk checks in arriving guest. State machine advances room status from VACANT_READY to OCCUPIED.",
        input: "Arrival confirmation",
        output: "Active stay record + Key card audit log",
        invariants: "Room cannot be assigned if housekeeping flag is DIRTY",
      },
      {
        step: "STEP 04",
        name: "Check-Out & Turnover",
        tag: "HOUSEKEEPING BUS",
        description:
          "Guest checks out. Bill is finalized and room status automatically updates to DIRTY, dispatching maintenance alerts.",
        input: "Departure audit + Folio settlement",
        output: "Settled invoice + Housekeeping task queued",
        invariants:
          "Room cannot be re-booked until housekeeping submits CLEAN clearance",
      },
    ],
  },
};

export const architecturesVi: Record<string, ProjectArchitecture> = {
  "fm-dictionary": {
    id: "fm-dictionary",
    code: "PRJ-01",
    title: "Kiến Trúc Phân Tầng 3 Lớp & Biên Mạng (Offline-First)",
    badge: "KIẾN TRÚC HỆ THỐNG · 3 TẦNG",
    summary:
      "Kiến trúc 3 tầng phân lập: ưu tiên thực thi nhị phân nội bộ trên thiết bị, kết hợp bộ đệm âm thanh tại biên và đồng bộ đám mây bất đồng bộ.",
    keyMetrics: [
      { label: "Độ trễ tra cứu", value: "< 5ms (Hive nội bộ)" },
      { label: "Khả năng Offline", value: "100% Độc lập với Cloud" },
      { label: "Quy mô thuật ngữ", value: "1.847 Thuật ngữ chuyên ngành" },
      { label: "Bảo mật API Key", value: "Ẩn danh hoàn toàn tại Edge" },
    ],
    layers: [
      {
        tier: "TẦNG 01",
        name: "Nhân Ứng Dụng Client (Flutter + Dart)",
        tag: "NHÂN OFFLINE NỘI BỘ",
        components: [
          "Kho nhị phân Hive (1.847 thuật ngữ lập chỉ mục sẵn)",
          "Máy trạng thái ôn tập ngắt quãng Leitner",
          "Bộ quy tắc chấm điểm phát âm tại thiết bị",
          "Bộ nhớ đệm tệp âm thanh trên đĩa cứng",
        ],
        responsibilities: [
          "Thực thi tra cứu thuật ngữ và ngữ âm dưới 5ms hoàn toàn trên bộ nhớ RAM",
          "Quản lý chu kỳ ôn tập flashcard và chuỗi ngày học mà không cần kết nối mạng",
          "Đánh giá dạng sóng giọng nói người học trực tiếp theo tiêu chuẩn âm vị học",
        ],
        invariants: [
          "Không phụ thuộc mạng cho mọi tác vụ tra cứu, đọc và làm bài trắc nghiệm",
          "Cập nhật schema nguyên tử: tệp tải về được kiểm tra ở kho tạm trước khi tráo đổi",
          "Lưu trữ mã hóa nội bộ trên máy, tuyệt đối không chèn mã theo dõi thương mại",
        ],
        protocols: [
          "Native Dart FFI",
          "Bộ nhớ nhị phân In-Memory",
          "Audio API Hệ thống",
        ],
        errorHandling:
          "Tự động chuyển ngay về kho dữ liệu gốc đi kèm ứng dụng nếu phân vùng lưu trữ người dùng bị hỏng.",
      },
      {
        tier: "TẦNG 02",
        name: "Gateway Biên Mạng (Cloudflare Workers)",
        tag: "GATEWAY BIÊN MẠNG",
        components: [
          "Bộ đệm âm thanh CDN toàn cầu",
          "Xác thực mã bảo mật & Ẩn API Key",
          "Giới hạn lưu lượng & Chống lạm dụng",
          "Điều phối chuyển tuyến dự phòng",
        ],
        responsibilities: [
          "Bảo vệ API Key giọng nói bên thứ ba, tránh trích xuất ngược từ mã nguồn mobile",
          "Phục vụ các file phát âm phổ biến từ nút mạng biên gần nhất với độ trễ TTFB < 50ms",
          "Áp đặt hạn mức cho từng người dùng, ngăn chặn nguy cơ cạn kiệt chi phí hạ tầng",
        ],
        invariants: [
          "Mã nhị phân ứng dụng cài trên điện thoại không chứa bất kỳ secret key nào",
          "Mọi file âm thanh lưu đệm đều được xác thực bằng mã băm SHA-256",
        ],
        protocols: ["HTTPS / TLS 1.3", "Bearer Token Auth", "Edge Cache API"],
        errorHandling:
          "Tự động chuyển tiếp yêu cầu sang nhà cung cấp âm thanh thứ hai nếu điểm cuối chính bị nghẽn (HTTP 429) hoặc suy giảm hiệu năng.",
      },
      {
        tier: "TẦNG 03",
        name: "Ranh Giới Đồng Bộ & Lưu Trữ (Firebase)",
        tag: "ĐỒNG BỘ ĐÁM MÂY BẤT ĐỒNG BỘ",
        components: [
          "Quản lý phiên ẩn danh & Nâng cấp Email",
          "Đồng bộ Firestore ngầm cho sổ từ và độ thành thạo",
          "Bảng xếp hạng chuỗi học Realtime Database (RTDB)",
        ],
        responsibilities: [
          "Cho phép học ngay mà không cần đăng ký, nâng cấp tài khoản vĩnh viễn bất kỳ lúc nào",
          "Đẩy dữ liệu bookmark và tiến độ học lên mây khi có kết nối mạng ổn định",
          "Duy trì bảng xếp hạng chuỗi học tập cộng đồng mà không làm nghẽn luồng UI chính",
        ],
        invariants: [
          "Sự cố mất mạng hoặc lỗi máy chủ Firebase không bao giờ làm gián đoạn việc tra từ",
          "Mọi ghi nhận dữ liệu lưu tạm ở hàng đợi nội bộ cho đến khi có mạng trở lại",
        ],
        protocols: [
          "WebSockets Bảo Mật",
          "Google Cloud gRPC",
          "OAuth2.0 / JWT",
        ],
        errorHandling:
          "Thử lại với thuật toán Exponential Backoff và giải quyết xung đột dựa trên mốc thời gian (ghi đè theo thay đổi mới nhất).",
      },
    ],
    pipelineTitle: "Luồng Dữ Liệu 3 Chiều & Vòng Đời Đồng Bộ",
    pipelineDescription:
      "Cách dữ liệu di chuyển xuyên suốt giữa nhân offline nội bộ, gateway proxy tại biên mạng và các dịch vụ đám mây.",
    pipeline: [
      {
        step: "LUỒNG 01",
        name: "Tra Cứu & Ôn Tập Thuật Ngữ",
        tag: "TRA CỨU OFFLINE",
        description:
          "Người dùng gõ từ khóa hoặc làm bài kiểm tra trắc nghiệm. Truy vấn khớp ngay lập tức trong kho nhị phân Hive trên điện thoại.",
        input: "Thao tác gõ phím hoặc chọn đáp án",
        output: "Định nghĩa thuật ngữ & điểm số hiển thị trong < 5ms",
        invariants: "0 yêu cầu mạng; hoạt động trơn tru 100% khi tắt mạng",
      },
      {
        step: "LUỒNG 02",
        name: "Phát Âm Chuẩn Chuyên Ngành",
        tag: "ĐIỀU PHỐI BIÊN MẠNG",
        description:
          "Người dùng bấm nghe phát âm. Kiểm tra bộ nhớ đệm trên máy, nếu chưa có sẽ gọi qua Cloudflare Worker để tải từ CDN biên.",
        input: "Yêu cầu phát âm (Mã thuật ngữ)",
        output: "Luồng âm thanh phát tức thì + lưu đệm vào máy",
        invariants:
          "Ẩn hoàn toàn API Key; CDN phân tán toàn cầu cho TTFB < 50ms",
      },
      {
        step: "LUỒNG 03",
        name: "Đồng Bộ Tiến Độ Học Tập",
        tag: "ĐỒNG BỘ BẤT ĐỒNG BỘ",
        description:
          "Hoàn thành buổi học cập nhật chuỗi streak. Bộ điều phối đẩy ngầm tiến độ lên Firestore và RTDB mà không chặn giao diện.",
        input: "Dữ liệu kết quả buổi học",
        output: "Bản sao lưu trên Cloud & cập nhật bảng xếp hạng",
        invariants:
          "Tự động lưu vào hàng đợi nội bộ nếu mất mạng; UI không giật lag",
      },
    ],
  },

  "github-vault-relay": {
    id: "github-vault-relay",
    code: "PRJ-02",
    title: "Quy Trình Đồng Bộ Xác Định 6 Giai Đoạn Tuyến Tính",
    badge: "SƠ ĐỒ QUY TRÌNH · MOBILE-FIRST",
    summary:
      "Cầu nối đồng bộ hoạt động trực tiếp qua GitHub Git Data REST API, hoàn toàn không cần Git binary, môi trường terminal hay máy chủ trung gian.",
    keyMetrics: [
      { label: "Kiến trúc đồng bộ", value: "Cây Git trực tiếp qua HTTPS" },
      { label: "Máy chủ trung gian", value: "Không (Thiết bị <-> GitHub)" },
      { label: "Cơ chế kích hoạt", value: "Chủ động 100% bởi người dùng" },
      { label: "Kiểm soát xung đột", value: "So khớp 3 chiều xác định" },
    ],
    layers: [
      {
        tier: "LỚP 01",
        name: "Giao Diện Obsidian Vault (Mobile / Desktop)",
        tag: "CLIENT NỘI BỘ",
        components: [
          "Giao diện cài đặt & Trạng thái Plugin",
          "Bộ tiếp hợp hệ thống tệp & Bảng băm SHA-256",
          "Thanh trạng thái & Nút bấm đồng bộ chủ động",
        ],
        responsibilities: [
          "Cung cấp nút bấm đồng bộ một chạm hoàn toàn do người dùng làm chủ",
          "Lưu trữ mã truy cập cá nhân (PAT) an toàn trong bộ nhớ nội bộ của plugin",
          "Cảnh báo trực quan khi phát hiện ghi chú có xung đột cần người dùng duyệt lại",
        ],
        invariants: [
          "Không tự động chạy ngầm tránh tranh chấp tài nguyên khi đang gõ phím",
          "Mã token PAT không bao giờ rời khỏi thiết bị cá nhân",
        ],
        protocols: ["Obsidian Plugin API", "Node.js fs / Mobile FS Adapter"],
        errorHandling:
          "Thông báo lỗi rõ ràng kèm hướng dẫn khắc phục nếu token hết hạn hoặc tệp đang bị khóa.",
      },
      {
        tier: "LỚP 02",
        name: "Lõi Động Cơ Đồng Bộ (TypeScript)",
        tag: "THUẬT TOÁN ĐỒNG BỘ",
        components: [
          "Bộ quét kiểm kê & Lọc tệp bỏ qua",
          "Máy trạng thái so khớp ba chiều (3-Way Diff)",
          "Nhật ký giao dịch Rollback an toàn",
          "Bộ thẩm định toàn vẹn sau khi kéo dữ liệu",
        ],
        responsibilities: [
          "Phân loại mọi tệp tin vào trạng thái rõ ràng (LOCAL_ONLY, REMOTE_CHANGED, CONFLICT)",
          "Điều phối quy trình tải tệp an toàn kèm nhật ký khôi phục",
          "Dựng cây Git Tree nguyên tử và tịnh tiến mốc commit SHA chuẩn",
        ],
        invariants: [
          "Tuyệt đối không ghi đè ngầm các tệp có xung đột: giữ cả 2 bản để người dùng đối chiếu",
          "Chỉ cập nhật con trỏ commit khi đã xác nhận mã băm trên đĩa khớp 100% với cây Git",
        ],
        protocols: ["Strict TypeScript", "Mã băm mật mã SHA-256"],
        errorHandling:
          "Tự động hoàn nguyên (rollback) các tệp vừa tải về nếu mạng đứt giữa chừng.",
      },
      {
        tier: "LỚP 03",
        name: "Kho Lưu Trữ GitHub (Git Data API)",
        tag: "LƯU TRỮ TỪ XA",
        components: [
          "Các điểm cuối GitHub Git Data REST API",
          "Đồ thị đối tượng Git Trees, Blobs và Commits",
          "Con trỏ tham chiếu nhánh (`refs/heads/main`)",
        ],
        responsibilities: [
          "Lưu trữ bất biến các đối tượng Git và lịch sử phiên bản",
          "Tịnh tiến con trỏ nhánh khi có commit mới hợp lệ",
          "Thực thi quy tắc bảo vệ nhánh và phân quyền bảo mật của GitHub",
        ],
        invariants: [
          "Không có server trung gian: dữ liệu đi thẳng giữa điện thoại và GitHub",
          "Chỉ chấp nhận đẩy commit tịnh tiến (Fast-Forward), không làm hỏng lịch sử",
        ],
        protocols: ["HTTPS / TLS 1.3", "GitHub REST API v3", "Git Data API"],
        errorHandling:
          "Phát hiện nhánh từ xa đã bị thay đổi trước đó và dừng đẩy commit nếu commit cha không khớp.",
      },
    ],
    pipelineTitle: "Quy Trình Đồng Bộ 6 Giai Đoạn Tuyến Tính",
    pipelineDescription:
      "Trình tự thực thi tuần tự, loại bỏ triệt để hiện tượng mất dữ liệu hoặc lỗi tranh chấp tài nguyên.",
    pipeline: [
      {
        step: "BƯỚC 01",
        name: "Kiểm Kê Vault & Quét Cây Thư Mục",
        tag: "QUÉT TẬP TIN",
        description:
          "Quét đệ quy toàn bộ các file markdown và tệp đính kèm trong Vault, tính toán bảng băm SHA-256 phản ánh trạng thái trên đĩa.",
        input: "Thư mục Obsidian Vault nội bộ",
        output: "Bảng băm tệp vật lý (Đường dẫn -> SHA-256)",
        invariants: "Chỉ đọc; hoàn toàn không thay đổi dữ liệu đĩa",
      },
      {
        step: "BƯỚC 02",
        name: "Đối Soát Ba Chiều (Reconciliation)",
        tag: "SO KHỚP TRẠNG THÁI",
        description:
          "So sánh mã băm hiện tại với mốc chuẩn state.json và cây Git trên GitHub. Phân loại thành LOCAL_ONLY, REMOTE_ONLY, CHANGED hoặc CONFLICT.",
        input: "Bảng băm máy + state.json + Git Tree SHA",
        output: "Danh sách hành động đồng bộ xác định",
        invariants:
          "Các tệp bị sửa đổi cả 2 bên được giữ lại cả 2 để người dùng duyệt",
      },
      {
        step: "BƯỚC 03",
        name: "Kéo Dữ Liệu Có Giao Dịch (Pull)",
        tag: "TẢI VÀ GHI AN TOÀN",
        description:
          "Tải các blob mới từ GitHub về và ghi xuống đĩa, đồng thời ghi lại nhật ký hoàn nguyên từng tệp vào journal.",
        input: "Danh sách blob từ xa có thay đổi",
        output: "Tệp trên đĩa được cập nhật + Nhật ký giao dịch",
        invariants:
          "Mất mạng giữa chừng sẽ tự động phục hồi về trạng thái ban đầu",
      },
      {
        step: "BƯỚC 04",
        name: "Kiểm Tra Toàn Vẹn Sau Khi Kéo",
        tag: "XÁC THỰC TOÀN VẸN",
        description:
          "Quét lại tệp vật lý trên đĩa sau khi ghi xong để khẳng định mã băm khớp chính xác 100% với cây Git trước khi cho phép bước 5.",
        input: "Trạng thái tệp vật lý trên đĩa",
        output: "Kết quả xác thực toàn vẹn (Đạt / Không đạt)",
        invariants:
          "Dừng quy trình ngay lập tức nếu phát hiện tệp bị cắt cụt hoặc sai băm",
      },
      {
        step: "BƯỚC 05",
        name: "Đẩy Dữ Liệu Nguyên Tử (Push)",
        tag: "TẠO CÂY & COMMIT",
        description:
          "Tải các blob mới lên GitHub qua Git Data API, dựng đối tượng Git Tree mới gắn với SHA commit cha và tạo commit nguyên tử.",
        input: "Các thay đổi nội bộ & Commit SHA cha",
        output: "Commit SHA mới & Con trỏ nhánh cập nhật",
        invariants: "Dựng cây Git nguyên tử; không tạo commit rác dở dang",
      },
      {
        step: "BƯỚC 06",
        name: "Ghi Nhận Mốc Con Trỏ Trạng Thái",
        tag: "CẬP NHẬT BASELINE",
        description:
          "Cập nhật tệp state.json trên máy với Commit SHA mới và mốc thời gian tệp, chính thức kết thúc chu kỳ đồng bộ an toàn.",
        input: "Commit SHA đã xác thực",
        output: "state.json được cập nhật hoàn tất",
        invariants:
          "Chỉ diễn ra ở bước cuối cùng sau khi push đã thành công 100%",
      },
    ],
  },

  "hotel-management": {
    id: "hotel-management",
    code: "PRJ-03",
    title: "Kiến Trúc Django MVT Monolith & Trợ Lý RAG Ngữ Nghĩa",
    badge: "KIẾN TRÚC BACKEND · FULL STACK",
    summary:
      "Hệ thống monolith Python hiệu năng cao sử dụng SQLite WAL mode đảm bảo an toàn giao dịch ACID, tích hợp kho vector FAISS hỗ trợ tra cứu chính sách.",
    keyMetrics: [
      { label: "Mô hình lõi", value: "Server-Rendered Django MVT" },
      { label: "Cơ sở dữ liệu", value: "SQLite WAL Mode (ACID)" },
      { label: "Chống trùng lịch", value: "select_for_update & Atomic" },
      { label: "Trợ lý ngữ nghĩa", value: "Kho vector FAISS nội bộ" },
    ],
    layers: [
      {
        tier: "TẦNG 01",
        name: "Giao Diện Phân Quyền Theo Nghiệp Vụ",
        tag: "GIAO DIỆN MÁY TRẠM LỄ TÂN",
        components: [
          "Giao diện HTML Server-Rendered tốc độ cao",
          "Cổng làm việc theo vai trò (Quản trị, Lễ tân, Buồng phòng)",
          "Bảo vệ CSRF & Quản lý phiên Session an toàn",
        ],
        responsibilities: [
          "Hiển thị giao diện tức thì dưới 50ms, không độ trễ tải JavaScript client nặng",
          "Phân quyền hiển thị tính năng chặt chẽ theo chức vụ và thẩm quyền nghiệp vụ",
          "Bảo vệ máy trạm khỏi các cuộc tấn công CSRF và đánh cắp phiên đăng nhập",
        ],
        invariants: [
          "Áp dụng cờ HTTPOnly và SameSite cho mọi cookie xác thực phiên",
          "Mọi thao tác thay đổi dữ liệu đều phải vượt qua kiểm tra mã CSRF hợp lệ",
        ],
        protocols: ["HTTP/2 / HTTPS", "Session Cookies", "Chuẩn HTML5"],
        errorHandling:
          "Thông báo lỗi thân thiện nếu thao tác lễ tân vi phạm quy tắc trạng thái buồng phòng.",
      },
      {
        tier: "TẦNG 02",
        name: "Lõi Nghiệp Vụ Monolith (Django 5.x / Python 3.12)",
        tag: "LÕI NGHIỆP VỤ & ORM",
        components: [
          "Động cơ ma trận tồn kho phòng theo ngày (Overlap Engine)",
          "Máy trạng thái vòng đời đặt phòng xác định",
          "Tối ưu truy vấn ORM (`select_related`, `prefetch_related`)",
          "Quản lý khóa đồng thời (`select_for_update`)",
        ],
        responsibilities: [
          "Ngăn chặn tuyệt đối việc đặt trùng phòng bằng công thức kiểm tra giao thoa khoảng ngày",
          "Điều phối trạng thái: Báo giá -> Đã đặt -> Nhận phòng -> Hoàn tất -> Đã hủy",
          "Xóa bỏ triệt để lỗi N+1 truy vấn trên các trang báo cáo doanh thu quản trị",
        ],
        invariants: [
          "Không chấp nhận đặt phòng nếu chưa khóa thành công dòng dữ liệu tồn kho",
          "Mọi chuyển dịch trạng thái phải tuân thủ nghiêm ngặt máy trạng thái hợp lệ",
        ],
        protocols: ["Python WSGI / ASGI", "Django ORM Core"],
        errorHandling:
          "Tự động hoàn nguyên trong khối `transaction.atomic()` nếu xảy ra vi phạm ràng buộc hoặc lỗi thanh toán.",
      },
      {
        tier: "TẦNG 03A",
        name: "Lưu Trữ Chính (SQLite Chế Độ WAL)",
        tag: "LƯU TRỮ AN TOÀN ACID",
        components: [
          "Nhân cơ sở dữ liệu SQLite 3 nhúng",
          "Cơ chế Write-Ahead Logging (WAL)",
          "Ràng buộc khóa ngoại & Kiểm tra khoảng dữ liệu",
        ],
        responsibilities: [
          "Truy vấn cực nhanh ở mức micro-giây cho danh mục buồng phòng và bảng giá",
          "Đảm bảo an toàn giao dịch ACID tuyệt đối mà không tốn tài nguyên chạy DB daemon riêng",
          "Cho phép nhiều máy đọc đồng thời trong khi một tiến trình ghi dữ liệu",
        ],
        invariants: [
          "Kích hoạt cờ WAL mode giúp đọc ghi song song không khóa nhau",
          "Chạy lệnh kiểm tra toàn vẹn pragma khi khởi động ứng dụng",
        ],
        protocols: ["Native C-API", "Khóa tệp POSIX", "Chuẩn SQL"],
        errorHandling:
          "Cơ chế xử lý bận (Busy timeout) tự động thử lại nếu nhiều máy trạm lễ tân cùng ghi đồng thời.",
      },
      {
        tier: "TẦNG 03B",
        name: "Trợ Lý Ngữ Nghĩa RAG (FAISS + HuggingFace)",
        tag: "TRỢ LÝ TRI THỨC FAISS",
        components: [
          "Kho lưu trữ vector FAISS Flat-L2",
          "Mô hình embedding HuggingFace cục bộ",
          "Quy trình nạp tài liệu chính sách khách sạn",
        ],
        responsibilities: [
          "Tìm kiếm tương đồng ngữ nghĩa về chính sách khu nghỉ dưỡng, quy định hủy và tiện ích VIP",
          "Trả lời câu hỏi tức thì cho nhân viên lễ tân mà không phụ thuộc API cloud bên ngoài",
          "Chạy trực tiếp trong tiến trình Django mà không làm chậm hệ thống",
        ],
        invariants: [
          "Không gửi tài liệu nội bộ hay thông tin khách hàng ra các dịch vụ AI bên ngoài",
          "Kho vector chạy hoàn toàn ngoại tuyến trên bộ nhớ RAM",
        ],
        protocols: ["NumPy Array Buffer", "Tìm kiếm Vector Trong Bộ Nhớ"],
        errorHandling:
          "Tự động chuyển về tìm kiếm từ khóa truyền thống nếu chỉ mục vector đang được nạp lại.",
      },
    ],
    pipelineTitle: "Vòng Đời Trạng Thái Đặt Phòng & Buồng Phòng",
    pipelineDescription:
      "Quy trình chuyển trạng thái toán học giúp loại bỏ tình trạng trùng lịch và kiểm soát vệ sinh phòng.",
    pipeline: [
      {
        step: "BƯỚC 01",
        name: "Kiểm Tra Trống Phòng Theo Khoảng Ngày",
        tag: "GIAO THOA KHOẢNG NGÀY",
        description:
          "Khách chọn ngày đến và ngày đi. Hệ thống tính toán phương trình giao thoa khoảng ngày đối chiếu với các phòng đang hoạt động.",
        input: "Khoảng ngày (CheckIn, CheckOut) + Hạng phòng",
        output: "Số lượng phòng còn trống khả dụng",
        invariants: "Xử lý trong < 2ms nhờ chỉ mục SQL ngày tháng tối ưu",
      },
      {
        step: "BƯỚC 02",
        name: "Khóa Dòng Dữ Liệu & Xác Nhận Đặt Phòng",
        tag: "KHÓA NGUYÊN TỬ",
        description:
          "Lễ tân bấm xác nhận. Django mở khối `transaction.atomic()` và khóa các dòng phòng cụ thể bằng lệnh `select_for_update()`.",
        input: "Thông tin khách + Phân bổ phòng",
        output: "Mã đặt phòng xác nhận + Giảm tồn kho",
        invariants:
          "Loại trừ 100% rủi ro trùng lịch khi nhiều người cùng bấm đặt một lúc",
      },
      {
        step: "BƯỚC 03",
        name: "Nhận Phòng & Bàn Giao Thẻ Khóa",
        tag: "TỊNH TIẾN TRẠNG THÁI",
        description:
          "Khách đến quầy làm thủ tục. Máy trạng thái chuyển trạng thái phòng từ SẴN SÀNG sang ĐANG Ở.",
        input: "Xác nhận nhận phòng",
        output: "Hồ sơ lưu trú hoạt động + Nhật ký thẻ khóa",
        invariants:
          "Không thể giao phòng nếu trạng thái buồng phòng chưa báo SẠCH",
      },
      {
        step: "BƯỚC 04",
        name: "Trả Phòng & Điều Phối Dọn Dẹp",
        tag: "ĐIỀU PHỐI BUỒNG",
        description:
          "Khách trả phòng. Hóa đơn được tất toán và trạng thái phòng tự động chuyển sang CHƯA DỌN, thông báo đến bộ phận buồng phòng.",
        input: "Kiểm tra phòng + Tất toán hóa đơn",
        output: "Hóa đơn hoàn tất + Nhiệm vụ dọn buồng phòng",
        invariants:
          "Phòng không thể được gán cho khách mới cho đến khi nhân viên dọn phòng báo XONG",
      },
    ],
  },
};
