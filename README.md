# Portfolio Setup

This portfolio is ready in `portfolio/`.

## Update your personal details

Edit:
- `portfolio/data.js`

You can update:
- Name
- Role
- About text
- Skills
- Projects
- Contact links
- Resume link
- Certificate cards

## Add your resume

1. Put your PDF in `portfolio/assets/docs/`
2. Update `resume.href` inside `portfolio/data.js`

Example:
```js
resume: {
  href: "./assets/docs/Mohammed_Sufiyan_Resume.pdf",
  label: "View Resume"
}
```

## Add certificates

1. Put certificate files in `portfolio/assets/certificates/`
2. Add entries to the `certificates` array in `portfolio/data.js`

Example:
```js
{
  title: "Machine Learning Certificate",
  issuer: "Coursera",
  description: "Completed coursework in machine learning fundamentals.",
  href: "./assets/certificates/machine-learning-certificate.pdf",
  preview: true
}
```

## Publish to GitHub Pages

Upload the contents of `portfolio/` to your GitHub Pages repository, or keep them in a repo and publish that folder using your preferred workflow.
