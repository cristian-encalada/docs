#!/usr/bin/env python3
"""Generate accessible, single-column DOCX and PDF resume deliverables."""

from html import escape
from pathlib import Path
from subprocess import run
from zipfile import ZIP_DEFLATED, ZipFile


ROOT = Path(__file__).resolve().parents[1]
PUBLIC_DIR = ROOT / "public/static/documents"
PRIVATE_DIR = ROOT / ".private-resumes"

CONTACT = [
    "cris.encalada.camargo@gmail.com",
    "+598 94 345 476",
    "Montevideo, Uruguay",
    "linkedin.com/in/cristian-encalada",
    "cristianencalada.dev",
]


def general_resume():
    return {
        "name": "Cristian Encalada",
        "headline": "Software & AI Engineer | Electronics Engineer",
        "summary": (
            "Software and AI Engineer with a background in Electronics Engineering and software quality assurance. "
            "Builds production Generative AI solutions, multi-agent systems, unstructured-data normalization workflows, "
            "AI-powered chatbots, and full-stack web applications."
        ),
        "include_projects": False,
        "experience": [
            (
                "Promtior",
                "AI Engineer",
                "Montevideo, Uruguay | Jul 2024 - Present | 2 years 3 months",
                [
                    "Built an AI system that normalized multi-country logistics data and automated tariff reviews, saving hundreds of manual hours.",
                    "Developed production multi-agent workflows with Claude Code and the Anthropic API.",
                    "Integrated an AI Telegram chatbot with a custom CRM to improve logistics sales operations.",
                ],
            ),
            (
                "Promtior",
                "RPA Developer",
                "Montevideo, Uruguay | Apr 2024 - Jun 2024 | 3 months",
                [
                    "Mapped repetitive processes across the real-estate and forestry industries for automation.",
                    "Deployed workflows with Power Automate, Power Apps, Azure Logic Apps, Excel, and Power BI.",
                ],
            ),
            (
                "Jalasoft",
                "Software Quality Assurance Engineer",
                "Cochabamba, Bolivia | Dec 2020 - Dec 2022 | 2 years 1 month",
                [
                    "Executed functional, performance, regression, and end-to-end testing with SQL, Git, Selenium, Slack, and Jira.",
                    "Collaborated with frontend, backend, DevOps, and automation teams in Scrum.",
                    "Supported Jenkins CI/CD workflows and software development and ETL processes.",
                ],
            ),
        ],
        "projects": [
            (
                "TagNCount | AI Developer | 2024",
                ["Built a computer-vision web application to detect, label, and count objects in images.", "tag-n-count.vercel.app"],
            ),
            (
                "Alquivago | Project Manager & Full-Stack Developer | 2023",
                ["Built a property-search and comparison application using Next.js, React, MongoDB, Flask, and Selenium.", "alquivago.vercel.app"],
            ),
        ],
        "education": [
            "Universidad Mayor de San Simon | Electronics Engineering | Completed 2016",
            "Instituto Federico Alvarez Plata | Computer Systems Analyst | Feb 2017 - Dec 2019",
            "Universidad de la Republica | Mechanical Engineering | In progress, 2025 - Present",
            "Boliviana de Aviacion | Diploma in Avionics | 2018",
        ],
        "certifications": [
            "Claude Certified Architect - Foundations | Anthropic | Issued Aug 25, 2026 | Expires Aug 25, 2027 | Credly",
            "Advanced English Certification (C1) | Universidad Mayor de San Simon | Issued Oct 2022",
        ],
        "skills": [
            "Frontend: React, Next.js, TypeScript, JavaScript, HTML/CSS, Tailwind CSS",
            "Backend: Node.js, Python, Flask, SQL, PostgreSQL, MongoDB, MySQL",
            "AI: LLMs, RAG, NLP, computer vision, LangChain, Anthropic API, Claude Code, MCP, multi-agent systems, Cursor, Codex, Amazon Bedrock",
            "CI/CD: Azure, Docker, GitHub Actions, Jenkins, Azure Logic Apps, Power Automate",
            "Tools: Git, GitHub, Jira, Selenium, Slack, Power BI, Power Apps, Excel, Linux",
            "Languages: Spanish (Native), English (C1), German (Elementary)",
        ],
    }


def entropy_resume():
    resume = general_resume()
    resume["headline"] = "AI-Assisted Engineer | Software & AI Engineer"
    resume["include_projects"] = True
    resume["summary"] = (
        "AI-Assisted Engineer with production experience building software and AI systems using Claude Code, the Anthropic API, "
        "Cursor, and Codex. Experienced in shipping end-to-end solutions for unstructured-data normalization, multi-agent workflows, "
        "logistics automation, customer-facing chatbots, and reliable delivery across frontend, backend, cloud, and CI/CD environments."
    )
    resume["skills"] = [
        "Frontend: React, TypeScript, Next.js",
        "Backend: Node.js, Python, Flask, PostgreSQL, SQL, MongoDB, MySQL",
        "AI-assisted development: Claude Code, Anthropic API, Cursor, Codex, MCP, multi-agent systems, LLMs, RAG, NLP",
        "Cloud and delivery: Azure, Docker, GitHub Actions, Jenkins, Azure Logic Apps, Power Automate",
        "Tools: Git, GitHub, Jira, Selenium, Slack, Power BI, Linux",
        "Languages: Spanish (Native), English (C1), German (Elementary)",
    ]
    resume["experience"][0] = (
        "Promtior",
        "AI Engineer",
        "Montevideo, Uruguay | Jul 2024 - Present",
        [
            "Shipped an AI-powered logistics system that processes unstructured data from multiple countries and formats, automating tariff-rate reviews and saving hundreds of hours of manual work.",
            "Built and iterated production multi-agent systems with Claude Code and the Anthropic API to normalize complex unstructured data.",
            "Implemented an AI Telegram chatbot integrated with a custom CRM to improve customer-sales task efficiency.",
            "Used Cursor and Codex as AI-assisted engineering tools across the development, review, and verification workflow.",
        ],
    )
    resume["projects"] = [
        (
            "Multi-agent logistics data normalization | AI Engineer",
            ["Designed a multi-agent workflow with the Anthropic API to transform complex unstructured logistics information into normalized, reviewable data."],
        )
    ]
    return resume


def document_xml(resume):
    paragraphs = []

    def paragraph(text="", style=None, bold=False):
        if style == "ListBullet":
            text = f"• {text}"
        style_xml = f'<w:pStyle w:val="{style}"/>' if style else ""
        bold_xml = "<w:b/>" if bold else ""
        paragraphs.append(
            f'<w:p><w:pPr>{style_xml}</w:pPr><w:r><w:rPr>{bold_xml}</w:rPr><w:t xml:space="preserve">{escape(text)}</w:t></w:r></w:p>'
        )

    paragraph(resume["name"], "Title")
    paragraph(" | ".join(CONTACT), "Contact")
    paragraph(resume["headline"], "Subtitle")
    paragraph("SUMMARY", "Heading1")
    paragraph(resume["summary"])
    paragraph("EXPERIENCE", "Heading1")
    for company, title, dates, bullets in resume["experience"]:
        paragraph(f"{title} | {company}", "Heading2")
        paragraph(dates, "RoleMeta")
        for bullet in bullets:
            paragraph(bullet, "ListBullet")
    if resume["include_projects"]:
        paragraph("PROJECTS", "Heading1")
        for title, bullets in resume["projects"]:
            paragraph(title, "Heading2")
            for bullet in bullets:
                paragraph(bullet, "ListBullet")
    paragraph("EDUCATION", "Heading1")
    for entry in resume["education"]:
        paragraph(entry, "ListBullet")
    paragraph("CERTIFICATIONS", "Heading1")
    for entry in resume["certifications"]:
        paragraph(entry, "ListBullet")
    paragraph("SKILLS & LANGUAGES", "Heading1")
    for entry in resume["skills"]:
        paragraph(entry, "ListBullet")

    body = "".join(paragraphs)
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>{body}<w:sectPr><w:pgSz w:w="12240" w:h="15840"/><w:pgMar w:top="720" w:right="900" w:bottom="720" w:left="900"/></w:sectPr></w:body>
</w:document>'''.encode()


STYLES_XML = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/><w:sz w:val="20"/></w:rPr><w:pPr><w:spacing w:after="80"/></w:pPr></w:style>
  <w:style w:type="paragraph" w:styleId="Title"><w:name w:val="Title"/><w:basedOn w:val="Normal"/><w:rPr><w:b/><w:sz w:val="30"/></w:rPr><w:pPr><w:jc w:val="center"/><w:spacing w:after="60"/></w:pPr></w:style>
  <w:style w:type="paragraph" w:styleId="Contact"><w:name w:val="Contact"/><w:basedOn w:val="Normal"/><w:rPr><w:sz w:val="16"/></w:rPr><w:pPr><w:jc w:val="center"/></w:pPr></w:style>
  <w:style w:type="paragraph" w:styleId="Subtitle"><w:name w:val="Subtitle"/><w:basedOn w:val="Normal"/><w:rPr><w:i/><w:sz w:val="20"/></w:rPr><w:pPr><w:jc w:val="center"/><w:spacing w:after="180"/></w:pPr></w:style>
  <w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="Heading 1"/><w:basedOn w:val="Normal"/><w:rPr><w:b/><w:color w:val="1F4E79"/><w:sz w:val="22"/></w:rPr><w:pPr><w:keepNext/><w:spacing w:before="180" w:after="80"/></w:pPr></w:style>
  <w:style w:type="paragraph" w:styleId="Heading2"><w:name w:val="Heading 2"/><w:basedOn w:val="Normal"/><w:rPr><w:b/><w:sz w:val="20"/></w:rPr><w:pPr><w:keepNext/><w:spacing w:before="100" w:after="20"/></w:pPr></w:style>
  <w:style w:type="paragraph" w:styleId="RoleMeta"><w:name w:val="Role Meta"/><w:basedOn w:val="Normal"/><w:rPr><w:i/><w:color w:val="666666"/><w:sz w:val="18"/></w:rPr><w:pPr><w:spacing w:after="40"/></w:pPr></w:style>
  <w:style w:type="paragraph" w:styleId="ListBullet"><w:name w:val="List Bullet"/><w:basedOn w:val="Normal"/><w:pPr><w:ind w:left="360" w:hanging="180"/><w:spacing w:after="35"/></w:pPr></w:style>
</w:styles>'''.encode()


CONTENT_TYPES = b'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
</Types>'''

RELS = b'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>'''

DOCUMENT_RELS = b'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>'''


def write_docx(resume, path):
    with ZipFile(path, "w", ZIP_DEFLATED) as archive:
        archive.writestr("[Content_Types].xml", CONTENT_TYPES)
        archive.writestr("_rels/.rels", RELS)
        archive.writestr("word/_rels/document.xml.rels", DOCUMENT_RELS)
        archive.writestr("word/document.xml", document_xml(resume))
        archive.writestr("word/styles.xml", STYLES_XML)


def roff(resume):
    lines = [
        ".po 0.65i",
        ".ll 7.15i",
        ".nr PS 9.5",
        ".nr VS 11",
        ".ad l",
        ".ce 1",
        f"\\fB\\s+5{resume['name']}\\s-5\\fR",
        ".ce 1",
        " | ".join(CONTACT),
        ".ce 1",
        f"\\fI{resume['headline']}\\fR",
        ".sp 0.12i",
    ]

    def escaped(text):
        return text.replace("\\", "\\e")

    def add(text):
        lines.extend([escaped(text), ".br"])

    def add_bold(text):
        lines.extend([f"\\fB{escaped(text)}\\fR", ".br"])

    def add_italic(text):
        lines.extend([f"\\fI{escaped(text)}\\fR", ".br"])

    def heading(text):
        lines.extend([".sp 0.08i", f"\\fB\\s+1{escaped(text)}\\s-1\\fR", ".br"])

    heading("SUMMARY")
    add(resume["summary"])
    sections = ["EXPERIENCE"]
    if resume["include_projects"]:
        sections.append("PROJECTS")
    sections.extend(["EDUCATION", "CERTIFICATIONS", "SKILLS & LANGUAGES"])
    for section in sections:
        heading(section)
        if section == "EXPERIENCE":
            for company, title, dates, bullets in resume["experience"]:
                add_bold(f"{title} | {company}")
                add_italic(dates)
                for bullet in bullets:
                    lines.extend([f"\\(bu {escaped(bullet)}", ".br"])
        elif section == "PROJECTS" and resume["include_projects"]:
            for title, bullets in resume["projects"]:
                add_bold(title)
                for bullet in bullets:
                    lines.extend([f"\\(bu {escaped(bullet)}", ".br"])
        elif section == "EDUCATION":
            for entry in resume["education"]:
                lines.extend([f"\\(bu {escaped(entry)}", ".br"])
        elif section == "CERTIFICATIONS":
            for entry in resume["certifications"]:
                lines.extend([f"\\(bu {escaped(entry)}", ".br"])
        else:
            for entry in resume["skills"]:
                add(entry)
    return "\n".join(lines).encode()


def write_pdf(resume, path):
    postscript = run(["groff", "-T", "ps", "-"], input=roff(resume), capture_output=True, check=True)
    pdf = run(["ps2pdf", "-", "-"], input=postscript.stdout, capture_output=True, check=True)
    path.write_bytes(pdf.stdout)


def generate(resume, directory, stem):
    directory.mkdir(parents=True, exist_ok=True)
    write_docx(resume, directory / f"{stem}.docx")
    write_pdf(resume, directory / f"{stem}.pdf")


if __name__ == "__main__":
    generate(general_resume(), PUBLIC_DIR, "Resume_Cristian_Encalada")
    generate(entropy_resume(), PRIVATE_DIR, "Resume_Cristian_Encalada_Entropy_AI_Assisted_Engineer")
