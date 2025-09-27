export default function Footer() {
  return (
    <footer id="contact" className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <span className="text-sm font-bold">CI</span>
              </div>
              <span className="font-semibold">CipherIQ</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Advanced fraud analytics that complements SecurePay with deeper insights.
            </p>
          </div>
          <div>
            <div className="mb-3 font-semibold">Product</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#features" className="hover:text-primary">
                  Features
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-primary">
                  Demo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  API
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-3 font-semibold">Resources</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-3 font-semibold">Company</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} CipherIQ. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
