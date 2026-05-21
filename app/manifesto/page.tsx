import { Nav } from "@/components/nav"
import { Footer } from "@/components/sections/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kaname Manifesto",
  description:
    "Manifesto for AI-Augmented Software Delivery. Four values for building software when AI is doing the building.",
}

const values = [
  {
    left: "Specification clarity",
    right: "implementation velocity",
    explanation:
      "Artificial intelligence generates code at machine speed. Speed without clarity produces incorrect systems faster. The bottleneck in AI-augmented delivery is not how quickly code is generated - it is how precisely humans can articulate what the system must do. We value knowing what to build over building it fast.",
  },
  {
    left: "Human judgment",
    right: "AI momentum",
    explanation:
      "Artificial intelligence does not determine intent, validate architecture, or accept delivery. Human judgment at defined gates governs every transition in the delivery system. The speed of AI generation does not justify bypassing this judgment - it makes it more necessary. An AI agent cannot carry work across a gate boundary.",
  },
  {
    left: "Living specification",
    right: "regenerable code",
    explanation:
      "Specifications endure; implementations are replaced. Code derived from a clear specification can be regenerated when requirements evolve, when tools improve, or when the system must be rebuilt. We value the specification above the code it generates - not because working software is unimportant, but because the specification is what working software must conform to. When they conflict, the specification governs.",
  },
  {
    left: "Specification evolution",
    right: "frozen requirements",
    explanation:
      "Specifications evolve as teams learn. Requirements that seemed clear become more precise; requirements that seemed complete reveal gaps. We expect this and build for it. A specification change cascades through the plan and task breakdown; AI agents regenerate the affected artifacts; implementation resumes. Governing the path of evolution is not overhead - it is how intent stays faithful to reality.",
  },
]

const principles = [
  "Our highest priority is to deliver software that faithfully reflects human intent - verified against the specification that defined it, not merely software that runs.",
  "Welcome specification changes, even during implementation. Governed change paths exist for this purpose. AI agents regenerate affected artifacts; human gates remain the governing boundary.",
  "Deliver frequently, but deliver verified. A Use Case delivered and confirmed against its acceptance criteria is worth more than many features that approximate requirements.",
  "Specification owners and implementers must engage throughout delivery - not only at gates. A specification that requires clarification during implementation is an incomplete specification. The gap belongs in the specification, not resolved locally by the implementer.",
  "Build AI-augmented delivery around humans with clear, named accountability. Give them the specification context and the safety to exercise judgment - including the judgment to raise when a specification is wrong. Accountability here means dependable ownership, not threatened compliance. Kaname presupposes trust; it cannot manufacture it.",
  "The most effective way to convey intent to an AI agent is through structured, precise specifications - not ad-hoc prompts. Prompts are transient. Specifications are versioned, shared, and authoritative.",
  "Verified Use Cases are the primary measure of delivery progress. A Use Case is complete when its acceptance criteria are satisfied and a human reviewer has confirmed it - not when code exists that approximates it.",
  "Human gates make AI-augmented delivery sustainable. Without them, AI velocity creates pressure that teams cannot absorb indefinitely. Gates protect the human layer of the delivery system against the speed of the machine layer.",
  "Continuous attention to specification quality is a form of technical excellence. A Use Case that is imprecise generates an implementation that is imprecise. Specification work is not overhead - it is the primary investment.",
  "Generate only what the specification requires. AI agents will produce what they are asked. The specification defines the boundary. Everything outside it is waste - generated fast.",
  "The best implementations emerge from clear human intent, not from AI inference. AI cannot determine what a system should do - it can only implement what is specified. The quality of AI output is bounded by the quality of the specification it receives.",
  "At defined intervals, inspect the delivery system - not just the work items - and adjust its policies. The path from specification to verified software is the system. Improving this path is ongoing work, never complete.",
]

export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-50">
      <Nav />

      {/* Hero */}
      <section className="px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-[10px] font-semibold tracking-[4px] text-amber-400 uppercase">
            Kaname Manifesto
          </p>
          <h1 className="mb-6 text-5xl font-extrabold tracking-[-2px] text-slate-50 md:text-6xl">
            Manifesto for<br />AI-Augmented Delivery
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-400">
            We are uncovering better ways of delivering software in an age when
            artificial intelligence generates code faster than humans can ensure
            it reflects their intent. The risk is not that AI builds the wrong
            thing slowly - it is that AI builds the wrong thing fast. Through
            this work, and helping others navigate the same shift, we have come
            to value:
          </p>
        </div>
      </section>

      {/* The four values */}
      <section className="border-t border-slate-800 px-6 py-16 md:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 overflow-hidden rounded-lg border border-slate-800">
            {values.map((v, i) => (
              <div
                key={i}
                className={`grid grid-cols-[1fr_auto_1fr] items-center ${
                  i < values.length - 1 ? "border-b border-slate-800" : ""
                }`}
              >
                <div className="px-6 py-6 md:px-8">
                  <span className="text-xl font-bold text-slate-50 md:text-2xl">
                    {v.left}
                  </span>
                </div>
                <div className="border-x border-slate-800 px-4 py-6 text-center">
                  <span className="text-[8px] font-bold tracking-[3px] text-amber-400/60 uppercase">
                    over
                  </span>
                </div>
                <div className="px-6 py-6 md:px-8">
                  <span className="text-xl text-slate-500 md:text-2xl">
                    {v.right}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm italic leading-relaxed text-slate-500">
            That is, while there is value in the items on the right, we value
            the items on the left more.
          </p>
        </div>
      </section>

      {/* On These Values */}
      <section className="border-t border-slate-800 bg-[#0a0f1e] px-6 py-16 md:px-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-10 text-[10px] font-semibold tracking-[3px] text-slate-600 uppercase">
            On These Values
          </p>
          <div className="space-y-10">
            {values.map((v, i) => (
              <div key={i} className="border-l-2 border-amber-400/30 pl-6">
                <p className="mb-3 text-sm font-semibold text-slate-50">
                  {v.left}{" "}
                  <span className="font-normal text-slate-600">over</span>{" "}
                  {v.right}
                </p>
                <p className="text-sm leading-relaxed text-slate-400">
                  {v.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-slate-800 px-6 py-16 md:px-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-[10px] font-semibold tracking-[3px] text-slate-600 uppercase">
            Principles
          </p>
          <h2 className="mb-10 text-2xl font-bold tracking-[-0.5px] text-slate-50">
            Twelve Principles Behind the Kaname Manifesto
          </h2>
          <div className="space-y-6">
            {principles.map((p, i) => (
              <div key={i} className="flex gap-6">
                <span className="mt-0.5 shrink-0 font-mono text-xs font-semibold tracking-widest text-amber-400/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-slate-400">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A Note on Foundations */}
      <section className="border-t border-slate-800 bg-[#0a0f1e] px-6 py-16 md:px-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-[10px] font-semibold tracking-[3px] text-slate-600 uppercase">
            A Note on Foundations
          </p>
          <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-slate-400">
            <p>
              This manifesto builds on work that preceded it. The Agile
              Manifesto (2001) established that individuals and their
              interactions matter more than processes and tools, that working
              software matters more than documentation about it, that customer
              collaboration matters more than contract negotiation, and that
              responding to change matters more than following a plan. These
              values have not expired.
            </p>
            <p>
              What has changed is the nature of the work. In 2001, the
              constraint on software delivery was implementation capacity -
              skilled humans writing code was scarce and expensive. The agile
              values reduced friction around that constraint.
            </p>
            <p>
              In the age of AI-augmented delivery, implementation capacity is no
              longer the constraint. AI agents can generate working code from a
              clear specification in seconds. The new constraint is upstream: the
              ability to specify precisely what the system must do, and to govern
              the delivery of AI-generated output against that specification.
            </p>
            <p>
              The Kaname values do not replace the agile values. They address
              the layer that AI has exposed.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800 px-6 py-16 md:px-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            The full guide defines the methodology behind these beliefs.
          </p>
          <div className="flex gap-3">
            <a
              href="/convictions"
              className="rounded border border-slate-800 px-4 py-2 text-[10px] tracking-widest text-slate-500 uppercase transition-colors hover:border-slate-600 hover:text-slate-300"
            >
              Three Convictions
            </a>
            <a
              href="/kaname-guide.pdf"
              download
              className="rounded bg-amber-400 px-4 py-2 text-[10px] font-bold tracking-widest text-[#0f172a] uppercase transition-colors hover:bg-amber-300"
            >
              ↓ Full Guide PDF
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
