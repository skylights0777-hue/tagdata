(function () {
  const form = document.querySelector("#strategyForm");
  const status = document.querySelector("#formStatus");

  if (!form) {
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const data = new FormData(form);
    const name = data.get("name").trim();
    const email = data.get("email").trim();
    const company = data.get("company").trim();
    const phone = data.get("phone").trim() || "Not provided";
    const need = data.get("need");
    const timeline = data.get("timeline");
    const details = data.get("details").trim();

    const subject = `TagData strategy call request from ${name}`;
    const body = [
      "A new TagData strategy call request was submitted.",
      "",
      `Name: ${name}`,
      `Requester Email: ${email}`,
      `Company: ${company}`,
      `Phone: ${phone}`,
      `Focus Area: ${need}`,
      `Timeline: ${timeline}`,
      "",
      "Project Details:",
      details,
      "",
      "Please reply to the requester to confirm a call time."
    ].join("\n");

    const mailto = new URL("mailto:skylights0777@gmail.com");
    mailto.searchParams.set("cc", email);
    mailto.searchParams.set("subject", subject);
    mailto.searchParams.set("body", body);

    status.textContent = "Opening your email app with the strategy call request.";
    window.location.href = mailto.toString();
  });
})();
