import { Document, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { inPdf, resume, type ResumeEntry } from "../../data/resume";

// The downloadable PDF. Built from the same data as the resume page: entries flagged `pdf: false` and the
// expandable details are left out, and the phone number (PDF only) is added. Built-in Helvetica keeps the text
// selectable and readable by applicant tracking systems.

const INK = "#1a1917";
const MUTED = "#55504a";
const ACCENT = "#1d4ed8";

const s = StyleSheet.create({
    page: { paddingVertical: 28, paddingHorizontal: 36, fontFamily: "Helvetica", fontSize: 8.9, lineHeight: 1.18, color: INK },
    name: { fontFamily: "Helvetica-Bold", fontSize: 19, lineHeight: 1.1, textAlign: "center", marginBottom: 3 },
    contact: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", fontSize: 8.6 },
    sep: { color: MUTED, marginHorizontal: 4 },
    link: { color: ACCENT, textDecoration: "none" },
    availability: { marginTop: 1.5, textAlign: "center", fontFamily: "Helvetica-Bold", fontSize: 8.6 },
    section: { marginTop: 5 },
    heading: {
        fontFamily: "Helvetica-Bold",
        fontSize: 9.4,
        letterSpacing: 0.8,
        textAlign: "center",
        textTransform: "uppercase",
        borderBottomWidth: 0.75,
        borderBottomColor: INK,
        paddingBottom: 1,
        marginBottom: 2,
    },
    skillRow: { flexDirection: "row" },
    skillLabel: { width: 92, fontFamily: "Helvetica-Bold" },
    skillItems: { flex: 1 },
    entry: { marginTop: 2.5 },
    entryHead: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" },
    entryTitle: { fontFamily: "Helvetica-Bold" },
    italic: { fontFamily: "Helvetica-Oblique", color: MUTED },
    meta: { fontFamily: "Helvetica-Bold", fontSize: 8.6 },
    bullet: { flexDirection: "row", paddingLeft: 6 },
    dot: { width: 9 },
    bulletText: { flex: 1 },
});

function Sep() {
    return <Text style={s.sep}>|</Text>;
}

function Bullets({ items }: { items: string[] }) {
    return (
        <>
            {items.map((item) => (
                <View key={item} style={s.bullet} wrap={false}>
                    <Text style={s.dot}>•</Text>
                    <Text style={s.bulletText}>{item}</Text>
                </View>
            ))}
        </>
    );
}

// Short tech lines sit on the title line to save space; long ones get their own line.
const INLINE_SUBTITLE_MAX = 60;

function ProjectEntry({ entry }: { entry: ResumeEntry }) {
    const inline = !!entry.subtitle && entry.subtitle.length <= INLINE_SUBTITLE_MAX;
    return (
        <View style={s.entry} wrap={false}>
            <Text>
                <Text style={s.entryTitle}>{entry.title}</Text>
                {entry.links?.map((link) => (
                    <Text key={link.href}>
                        <Text style={{ color: MUTED }}>{"  |  "}</Text>
                        <Link src={link.href} style={s.link}>
                            {link.label}
                        </Link>
                    </Text>
                ))}
                {inline && <Text style={s.italic}>{`  –  ${entry.subtitle}`}</Text>}
            </Text>
            {entry.subtitle && !inline && <Text style={s.italic}>{entry.subtitle}</Text>}
            <Bullets items={entry.bullets} />
        </View>
    );
}

function DatedEntry({ entry }: { entry: ResumeEntry }) {
    return (
        <View style={s.entry} wrap={false}>
            <View style={s.entryHead}>
                <Text>
                    <Text style={s.entryTitle}>{entry.title}</Text>
                    {entry.subtitle && <Text style={s.italic}>{`  –  ${entry.subtitle}`}</Text>}
                </Text>
                {entry.meta && <Text style={s.meta}>{entry.meta}</Text>}
            </View>
            <Bullets items={entry.bullets} />
        </View>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <View style={s.section}>
            <Text style={s.heading} minPresenceAhead={40}>
                {title}
            </Text>
            {children}
        </View>
    );
}

export default function ResumeDocument() {
    const { contact } = resume;
    // Certifications and spoken languages share the last skills line, as on the original resume.
    const skills = resume.skills.filter(inPdf);
    const certifications = skills.find((g) => g.label === "Certifications");
    const spoken = skills.find((g) => g.label === "Spoken Languages");
    const mainSkills = skills.filter((g) => g !== certifications && g !== spoken);
    return (
        <Document title={`${resume.name} – Resume`} author={resume.name} subject={`${resume.name} – ${resume.headline}`}>
            <Page size="LETTER" style={s.page}>
                <Text style={s.name}>{resume.name}</Text>
                <View style={s.contact}>
                    <Link src={`mailto:${contact.email}`} style={s.link}>
                        {contact.email}
                    </Link>
                    <Sep />
                    <Text>{contact.phone.value}</Text>
                    <Sep />
                    <Text>{contact.location}</Text>
                    {contact.links.map((link) => (
                        <View key={link.href} style={{ flexDirection: "row" }}>
                            <Sep />
                            <Link src={link.href} style={s.link}>
                                {link.label}
                            </Link>
                        </View>
                    ))}
                </View>
                <Text style={s.availability}>{contact.availability}</Text>

                <Section title="Summary">
                    <Text>{resume.summary}</Text>
                </Section>

                <Section title="Skills & Certifications">
                    {mainSkills.map((group) => (
                        <View key={group.label} style={s.skillRow}>
                            <Text style={s.skillLabel}>{group.label}:</Text>
                            <Text style={s.skillItems}>{group.items}</Text>
                        </View>
                    ))}
                    {certifications && (
                        <View style={s.skillRow}>
                            <Text style={s.skillLabel}>{certifications.label}:</Text>
                            <Text style={s.skillItems}>
                                {certifications.items}
                                {spoken && (
                                    <Text>
                                        <Text style={{ color: MUTED }}>{"   |   "}</Text>
                                        <Text style={{ fontFamily: "Helvetica-Bold" }}>{`${spoken.label}: `}</Text>
                                        {spoken.items}
                                    </Text>
                                )}
                            </Text>
                        </View>
                    )}
                </Section>

                <Section title="Projects">
                    {resume.projects.filter(inPdf).map((entry) => (
                        <ProjectEntry key={entry.id} entry={entry} />
                    ))}
                </Section>

                <Section title="Education">
                    {resume.education.filter(inPdf).map((entry) => (
                        <DatedEntry key={entry.id} entry={entry} />
                    ))}
                </Section>

                <Section title="Work Experience">
                    {resume.experience.filter(inPdf).map((entry) => (
                        <DatedEntry key={entry.id} entry={entry} />
                    ))}
                </Section>
            </Page>
        </Document>
    );
}
