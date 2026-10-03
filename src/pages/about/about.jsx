import {
	ArrowUpRight,
	HeartHandshake,
	MapPin,
	Music2,
	Wrench,
} from "lucide-react";

const companyFacts = [
	["Founded", "2014"],
	["Based in", "Phnom Penh"],
	["Team members", "25"],
	["Partner brands", "4"],
];

const values = [
	{
		icon: Music2,
		title: "Made for musicians",
		description:
			"A carefully chosen range of instruments and recording gear, tested by the people who use them.",
	},
	{
		icon: Wrench,
		title: "Here after the sale",
		description:
			"Setup advice, repairs, and practical support help every instrument find a long life.",
	},
	{
		icon: HeartHandshake,
		title: "Room for everyone",
		description:
			"We help first-time players, working artists, schools, and studios find their next sound.",
	},
];

export default function AboutPage() {
	return (
		<div className="space-y-10 pb-8">
			<section className="grid overflow-hidden rounded-lg bg-card text-card-foreground lg:grid-cols-[1.05fr_0.95fr]">
				<div className="flex flex-col justify-center px-6 py-9 sm:px-10 sm:py-12">
					<p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#5e81ac] dark:text-[#88c0d0]">
						Independent music house · Since 2014
					</p>
					<h2 className="max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
						Good instruments. Good people. Better sound.
					</h2>
					<p className="mt-5 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
						Mongkol.Arun &amp; Co. helps musicians across Cambodia find the gear,
						knowledge, and support to make their next idea heard.
					</p>
					<p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
						<MapPin className="size-4 text-[#5e81ac] dark:text-[#88c0d0]" aria-hidden="true" />
						Phnom Penh, Cambodia
					</p>
				</div>
				<div className="relative min-h-64 lg:min-h-[360px]">
					<img
						src="https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=1200&q=85"
						alt="Close view of an acoustic guitar ready to be played"
						className="absolute inset-0 size-full object-cover"
					/>
					<div className="absolute inset-0 bg-linear-to-r from-[#2e3440]/35 via-transparent to-transparent" />
					<p className="absolute bottom-4 right-4 rounded-sm bg-background/90 px-3 py-2 text-xs text-foreground">
						Find your sound here.
					</p>
				</div>
			</section>

			<dl className="grid grid-cols-2 border-y border-border sm:grid-cols-4">
				{companyFacts.map(([label, value], index) => (
					<div
						key={label}
						className={`px-4 py-5 sm:px-6 ${index > 0 ? "border-l border-border" : ""}`}
					>
						<dt className="text-xs uppercase text-muted-foreground">{label}</dt>
						<dd className="mt-1 text-lg font-semibold text-foreground">{value}</dd>
					</div>
				))}
			</dl>

			<section className="grid gap-6 md:grid-cols-[0.7fr_1.3fr] md:gap-12">
				<div>
					<p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5e81ac] dark:text-[#88c0d0]">
						Our story
					</p>
					<h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
						Built around the joy of playing.
					</h2>
				</div>
				<div className="space-y-4 text-sm leading-6 text-muted-foreground">
					<p>
						We started with a simple idea: buying an instrument should feel as
						welcoming as making music. What began as a small neighborhood shop
						has grown into a home for players, teachers, and creators throughout
						Phnom Penh.
					</p>
					<p>
						Today our team brings together musicians, technicians, and
						gear-minded problem solvers. We listen first, make recommendations
						that fit real needs, and stay close by when it is time to tune,
						repair, or try something new.
					</p>
				</div>
			</section>

			<section className="border-t border-border pt-6">
				<div className="mb-6 flex flex-wrap items-end justify-between gap-3">
					<div>
						<p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5e81ac] dark:text-[#88c0d0]">
							What matters to us
						</p>
						<h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
							More than the gear.
						</h2>
					</div>
					<p className="max-w-md text-sm leading-5 text-muted-foreground">
						The best part of a music shop is what people go on to create.
					</p>
				</div>
				<div className="grid gap-6 sm:grid-cols-3 sm:gap-8">
					{values.map(({ icon: Icon, title, description }) => (
						<article key={title} className="border-t-2 border-[#88c0d0] pt-4">
							<Icon className="size-5 text-[#5e81ac] dark:text-[#88c0d0]" aria-hidden="true" />
							<h3 className="mt-3 font-semibold text-foreground">{title}</h3>
							<p className="mt-2 text-sm leading-5 text-muted-foreground">{description}</p>
						</article>
					))}
				</div>
			</section>

			<section className="flex flex-col justify-between gap-5 border-t border-border pt-6 sm:flex-row sm:items-center">
				<div>
					<p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5e81ac] dark:text-[#88c0d0]">
						Come say hello
					</p>
					<h2 className="mt-2 text-xl font-semibold text-foreground">
						Your next music spot start somewhere!
					</h2>
				</div>
				<a
					href="mailto:prak092839351@gmail.com"
					className="inline-flex items-center gap-2 self-start rounded-md bg-[#5e81ac] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#4c6d96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5e81ac] sm:self-auto"
				>
					prak092839351@gmail.com
					<ArrowUpRight className="size-4" aria-hidden="true" />
				</a>
			</section>
		</div>
	);
}
