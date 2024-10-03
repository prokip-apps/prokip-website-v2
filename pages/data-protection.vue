<template>
  <div>
    <HeaderMain classes="plain-header" logo="/img/logo-color.svg" />

    <div class="policy-container">
      <div class="policy-container__inner">
        <div class="policy-sidebar">
          <div class="policy-sidebar__item">
            <NuxtLink
              to="/terms-and-condition"
              class="policy-sidebar__item__link"
              >Terms and Condition <span class="number">14</span></NuxtLink
            >

            <NuxtLink to="/privacy-policy" class="policy-sidebar__item__link"
              >Privacy Policy <span class="number">8</span></NuxtLink
            >

            <div class="policy-sidebar__item__wrapper">
              <NuxtLink to="/data-protection" class="policy-sidebar__item__link"
                >Data Protection<span class="number">6</span></NuxtLink
              >

              <div class="policy-sidebar__item__sub">
                <p>Compliance</p>
                <p>Data Processing Agreement</p>
                <p>Data Transfer</p>
                <p>Data Subject Rights</p>
                <p>Breach Notification</p>
                <p>Cooperation</p>
              </div>
            </div>
          </div>
        </div>

        <div class="policy-content">
          <div class="policy-content__head">
            <SectionTitle title="Data Protection" />
            <h2>Data Protection Policy</h2>
            <span>Last updated on October 3, 2024</span>
          </div>

          <div class="policy-content__body">
            <section>
              <ol>
                <li>
                  <h3>Compliance</h3>
                  <p>
                    Prokip is committed to complying with all applicable data
                    protection laws.
                  </p>
                </li>
                <li>
                  <h3>Data Processing Agreement</h3>
                  <p>
                    Prokip may require SME Users to enter into a Data Processing
                    Agreement (DPA) to formalize the parties' obligations and
                    rights regarding the processing of personal data.
                  </p>
                </li>
                <li>
                  <h3>Data Transfer</h3>
                  <p>
                    If Prokip transfers personal data to countries outside the
                    European Economic Area (EEA) or other jurisdictions with
                    different data protection laws, it will ensure that
                    appropriate safeguards are in place to protect the data.
                  </p>
                </li>
                <li>
                  <h3>Data Subject Rights</h3>
                  <p>
                    Prokip will assist SME Users in fulfilling their obligations
                    to data subjects regarding their rights to access, rectify,
                    erase, restrict processing, object to processing, and data
                    portability.
                  </p>
                </li>
                <li>
                  <h3>Breach Notification</h3>
                  <p>
                    Prokip will promptly notify SME Users of any personal data
                    breaches that may affect their rights or interests.
                  </p>
                </li>
                <li>
                  <h3>Cooperation</h3>
                  <p>
                    Prokip will cooperate with relevant data protection
                    authorities and SME Users to address any data protection
                    concerns or complaints.
                  </p>
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