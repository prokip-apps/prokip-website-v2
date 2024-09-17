<template>
  <section id="careers-oppurtunities" class="careers-oppurtunities">
    <div class="careers-oppurtunities__inner">
      <div class="careers-oppurtunities__heading">
        <div class="left">
          <SectionTitle title="Opportunities" />
          <h2>Find the right role for you</h2>
        </div>
        <div class="right">
          <h3>We have 72 open positions</h3>
        </div>
      </div>

      <div class="careers-oppurtunities__grid">
        <div class="sidebar">
          <div class="title">
            <h4>Department</h4>
            <button>Clear</button>
          </div>

          <div class="careers-oppurtunities__categories">
            <div class="category">
              <input type="checkbox" id="all" checked />
              <label for="all">All</label>
            </div>

            <div class="category">
              <input type="checkbox" id="analytics" />
              <label for="analytics">Analytics</label>
            </div>

            <div class="category">
              <input type="checkbox" id="business-development" />
              <label for="business-development">Business Development</label>
            </div>

            <div class="category">
              <input type="checkbox" id="communications" />
              <label for="communications">Communications</label>
            </div>

            <div class="category">
              <input type="checkbox" id="design" />
              <label for="design">Design</label>
            </div>

            <div class="category">
              <input type="checkbox" id="engineering-data" />
              <label for="engineering-data">Engineering & Data</label>
            </div>

            <div class="category">
              <input type="checkbox" id="finance" />
              <label for="finance">Finance</label>
            </div>

            <div class="category">
              <input type="checkbox" id="hr-culture" />
              <label for="hr-culture">HR & Culture</label>
            </div>

            <div class="category">
              <input type="checkbox" id="legal" />
              <label for="legal">Legal</label>
            </div>

            <div class="category">
              <input type="checkbox" id="marketing" />
              <label for="marketing">Marketing</label>
            </div>

            <div class="category">
              <input type="checkbox" id="operations" />
              <label for="operations">Operations</label>
            </div>

            <div class="category">
              <input type="checkbox" id="product" />
              <label for="product">Product</label>
            </div>

            <div class="category">
              <input type="checkbox" id="sales-account-management" />
              <label for="sales-account-management"
                >Sales & Account Management</label
              >
            </div>
          </div>

          <div class="careers-oppurtunities__locations">
            <div class="title">Locations</div>
            <div class="locations">
              <span>All</span>
              <span>Lagos</span>
              <span>Kigali</span>
            </div>
          </div>
        </div>
        <div class="main">
          <form action="" class="career-form">
            <Icon name="lucide:search" />
            <input type="text" placeholder="Search all jobs" />
          </form>

          <div class="careers-oppurtunities__jobs">
            <nuxt-link
              to="/careers/job-details"
              class="careers-oppurtunities__jobs-item"
            >
              <div class="job__title">
                <h4>
                  Business Operations Manager - Saving, Lending & Insurance
                </h4>
              </div>

              <div class="job__info">
                <div class="title">Operations</div>
                <div class="location">Lagos</div>
              </div>
            </nuxt-link>

            <nuxt-link
              to="/careers/job-details"
              class="careers-oppurtunities__jobs-item"
            >
              <div class="job__title">
                <h4>
                  Business Operations Manager - Saving, Lending & Insurance
                </h4>
              </div>

              <div class="job__info">
                <div class="title">Operations</div>
                <div class="location">Lagos</div>
              </div>
            </nuxt-link>

            <nuxt-link
              to="/careers/job-details"
              class="careers-oppurtunities__jobs-item"
            >
              <div class="job__title">
                <h4>
                  Business Operations Manager - Saving, Lending & Insurance
                </h4>
              </div>

              <div class="job__info">
                <div class="title">Operations</div>
                <div class="location">Lagos</div>
              </div>
            </nuxt-link>

            <nuxt-link
              to="/careers/job-details"
              class="careers-oppurtunities__jobs-item"
            >
              <div>
                <div class="job__title">
                  <h4>
                    Business Operations Manager - Saving, Lending & Insurance
                  </h4>
                </div>

                <div class="job__info">
                  <div class="title">Operations</div>
                  <div class="location">Lagos</div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style>
</style>