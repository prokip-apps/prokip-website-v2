<template>
  <div>
    <HeaderMain
      classes="plain-header"
      logo="/img/logo-color.svg"
      globalIconSrc="/img/icon/global-icon-black.svg"
    />

    <div class="policy-container">
      <div class="policy-container__inner">
        <div class="policy-sidebar">
          <div class="policy-sidebar__item">
            <NuxtLink
              to="/terms-and-condition"
              class="policy-sidebar__item__link"
              >Terms and Condition <span class="number">14</span></NuxtLink
            >

            <div class="policy-sidebar__item__wrapper">
              <NuxtLink to="/privacy-policy" class="policy-sidebar__item__link"
                >Privacy Policy <span class="number">10</span></NuxtLink
              >

              <div class="policy-sidebar__item__sub">
                <p>Introduction</p>
                <p>Definitions</p>
                <p>License Grant and Restrictions</p>
                <p>Information Collection</p>
                <p>Information Use</p>
                <p>Information Disclosure</p>
                <p>Data Security</p>
                <p>Access and Correction</p>
                <p>Changes to the Privacy Policy</p>
                <p>Contact Information</p>
              </div>
            </div>

            <NuxtLink to="/data-protection" class="policy-sidebar__item__link"
              >Data Protection Policy <span class="number">6</span></NuxtLink
            >
          </div>
        </div>

        <div class="policy-content">
          <div class="policy-content__head">
            <SectionTitle title="Privacy Policy" />
            <h2>Privacy Policy</h2>
            <span>Last updated on October 3, 2024</span>
          </div>

          <div class="policy-content__body">
            <section>
              <h3>Introduction</h3>
              <p>
                This Privacy Policy outlines how Prokip collects, uses,
                discloses, and protects the personal information of SME Users
                who use the Prokip ERP Software.
              </p>

              <h3>Definitions</h3>
              <ol>
                <li>
                  <h4>License Grant and Restrictions</h4>
                  <ul>
                    <li>
                      <strong>License Grant:</strong> Prokip grants SME Users a
                      limited, non-exclusive, non-transferable license to use
                      the ERP Software for internal business purposes, subject
                      to the terms of this Agreement.
                    </li>
                    <li>
                      <strong>Restrictions:</strong> SME Users may not:
                      <ul>
                        <li>
                          Sublicense, sell, or distribute the ERP Software.
                        </li>
                        <li>
                          Modify, adapt, reverse engineer, decompile, or
                          disassemble the ERP Software.
                        </li>
                        <li>
                          Create derivative works based on the ERP Software.
                        </li>
                        <li>
                          Use the ERP Software for any unlawful or prohibited
                          purpose.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Information Collection</h4>
                  <ul>
                    <li>
                      <strong>Personal Information:</strong> Prokip may collect
                      personal information such as:
                      <ul>
                        <li>Contact information (name, email, phone number)</li>
                        <li>
                          Business information (company name, industry, size)
                        </li>
                        <li>Financial information (payment details)</li>
                        <li>
                          Usage data (information about how SME Users interact
                          with the ERP Software)
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Information Use</h4>
                  <ul>
                    <li>
                      <strong>Purpose:</strong> Prokip uses personal information
                      to:
                      <ul>
                        <li>Provide and improve the ERP Software</li>
                        <li>Process payments</li>
                        <li>Communicate with SME Users</li>
                        <li>Analyze usage patterns and trends</li>
                        <li>Comply with legal requirements</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Information Disclosure</h4>
                  <ul>
                    <li>
                      <strong>Third Parties:</strong> Prokip may disclose
                      personal information to:
                      <ul>
                        <li>
                          Service providers who assist in providing the ERP
                          Software
                        </li>
                        <li>Payment processors</li>
                        <li>Legal authorities as required by law</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Consent:</strong> Prokip will obtain SME User
                      consent before sharing personal information with third
                      parties for purposes other than those stated in this
                      Privacy Policy.
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Data Security</h4>
                  <ul>
                    <li>
                      <strong>Measures:</strong> Prokip implements reasonable
                      security measures to protect personal information from
                      unauthorized access, disclosure, alteration, or
                      destruction.
                    </li>
                    <li>
                      <strong>Breaches:</strong> In the event of a data breach,
                      Prokip will notify affected SME Users and take appropriate
                      steps to mitigate the consequences.
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Access and Correction</h4>
                  <ul>
                    <li>
                      <strong>Rights:</strong> SME Users have the right to:
                      <ul>
                        <li>Access their personal information</li>
                        <li>Request correction of inaccurate information</li>
                        <li>
                          Object to the processing of their personal information
                        </li>
                        <li>Request deletion of their personal information</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Changes to the Privacy Policy</h4>
                  <ul>
                    <li>
                      <strong>Updates:</strong> Prokip may update this Privacy
                      Policy from time to time. SME Users will be notified of
                      any significant changes.
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Contact Information</h4>
                  <ul>
                    <li>
                      <strong>Contact:</strong> For questions or concerns
                      regarding this Privacy Policy, please contact Prokip at
                      company@prokip.africa
                    </li>
                  </ul>
                </li>
              </ol>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "footer",
});
</script>

<style>
</style>