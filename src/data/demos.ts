// Sample projects that are actually built and public. Each maps to a catalogue project by id.
export interface Demo {
  projectId: number;
  slug: string;
  title: string;
  kind: string;
  blurb: string;
  live: string;
  code: string;
  thumb: string; // under public/
  badge: string;
  sample?: string; // sample report, PPT and diagrams
  builtWith: string; // the demo's own stack, which can differ from the catalogue idea's
}

export const demos: Demo[] = [
  {
    projectId: 34,
    slug: 'handwriting',
    title: 'Handwritten digit recognition',
    kind: 'Deep learning · runs in the browser',
    blurb: 'Draw a digit and a CNN trained on MNIST (99.23% on the test set) recognises it. Python training, plain-JavaScript inference.',
    live: 'https://finalcommitprojects.github.io/demo-handwriting/',
    code: 'https://github.com/finalcommitprojects/demo-handwriting',
    thumb: '/demos/handwriting.png',
    badge: 'Digits demo',
    builtWith: 'PyTorch for training, plain JavaScript in the browser. Digits only; letters use the same code with EMNIST.',
  },
  {
    projectId: 8,
    slug: 'lost-found',
    title: 'Campus Lost & Found',
    kind: 'Full web app · runs in your browser',
    blurb: 'Post, search and claim items with a proof question, then arrange the hand-over in messages. The live demo keeps data in your browser; the repo also has the Express + SQLite server. Comes with a sample synopsis, report chapter, PPT and diagrams.',
    live: 'https://finalcommitprojects.github.io/demo-lost-found/',
    code: 'https://github.com/finalcommitprojects/demo-lost-found',
    thumb: '/demos/lost-found.png',
    badge: 'Live demo',
    sample: 'https://github.com/finalcommitprojects/demo-lost-found/tree/main/samples',
    builtWith: 'Plain JavaScript front end, with a Node.js + Express + SQLite server in the repo.',
  },
  {
    projectId: 36,
    slug: 'rag-helpdesk',
    title: 'College helpdesk chatbot (RAG)',
    kind: 'NLP · retrieval with cited sources',
    blurb: "Ask about a college's rules and get the answer from its handbook, with the exact page cited. Says so when the handbook doesn't cover a question.",
    live: 'https://finalcommitprojects.github.io/demo-rag-helpdesk/',
    code: 'https://github.com/finalcommitprojects/demo-rag-helpdesk',
    thumb: '/demos/rag-helpdesk.png',
    badge: 'Live demo',
    builtWith: 'BM25 retrieval in JavaScript, with optional Gemini answers. A full version adds embeddings (LangChain, ChromaDB) and a Streamlit UI.',
  },
  {
    projectId: 10,
    slug: 'expense-splitter',
    title: 'Expense Splitter (Android app)',
    kind: 'Android · Kotlin, Compose, Room',
    blurb: 'Split bills with roommates, settle up in a few payments, and pay through any UPI app. Download the signed APK and try it on your phone.',
    live: 'https://finalcommitprojects.github.io/demo-expense-splitter/',
    code: 'https://github.com/finalcommitprojects/demo-expense-splitter',
    thumb: '/demos/expense-splitter.png',
    badge: 'Android APK',
    builtWith: 'Kotlin, Jetpack Compose and Room (native Android). The same app can be built in Flutter with Firebase.',
  },
  {
    projectId: 62,
    slug: 'blockchain-voting',
    title: 'Blockchain e-voting',
    kind: 'Blockchain · runs in the browser',
    blurb: 'Cast signed votes, mine them into blocks, then try to change one. The chain shows which block was touched and why re-mining it still fails.',
    live: 'https://finalcommitprojects.github.io/demo-blockchain-voting/',
    code: 'https://github.com/finalcommitprojects/demo-blockchain-voting',
    thumb: '/demos/blockchain-voting.png',
    badge: 'Live demo',
    builtWith: 'A small blockchain in JavaScript (SHA-256 proof of work, ECDSA-signed votes, Merkle roots). The full version uses a Solidity contract on an Ethereum test network with MetaMask.',
  },
];

export const demoFor = (projectId: number) => demos.find((d) => d.projectId === projectId);
