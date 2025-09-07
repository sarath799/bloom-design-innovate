import { useEffect } from "react";

export default function LeadForm() {
  useEffect(() => {
    const form = document.getElementById("contactForm") as HTMLFormElement;
    const formMsg = document.getElementById("formMsg");

    form?.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (formMsg) formMsg.innerHTML = "Submitting...";

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
        });
        if (response.ok) {
          if (formMsg)
            formMsg.innerHTML =
              "<span class='text-success'>✅ Thank you! Your details were submitted.</span>";
          form.reset();
        } else {
          if (formMsg)
            formMsg.innerHTML =
              "<span class='text-danger'>❌ Something went wrong. Please try again.</span>";
        }
      } catch (error: any) {
        if (formMsg)
          formMsg.innerHTML = `<span class='text-danger'>⚠️ Error: ${error.message}</span>`;
      }
    });
  }, []);

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Stay Updated</h2>
        <p className="text-center mb-4">
          Enter your details and we’ll get back to you.
        </p>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form
              id="contactForm"
              method="POST"
              action="https://script.google.com/macros/s/AKfycbzOsP4tPY0A0ifw2-h9qbzHvWzLCKK73zP4kaukrGb8oQlpkmWLikGKFVl7Mz9H2g-Qhg/exec"
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
            <div id="formMsg" className="mt-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
