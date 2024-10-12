<template>
  <section id="careers-oppurtunities" class="careers-oppurtunities">
    <div class="careers-oppurtunities__inner">
      <div class="careers-oppurtunities__heading">
        <div class="left">
          <SectionTitle title="Opportunities" />
          <h2>Find the right role for you</h2>
        </div>
        <div class="right">
          <h3>We have 3 open positions</h3>
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
          </div>

          <div class="careers-oppurtunities__locations">
            <div class="title">Locations</div>
            <div class="locations">
              <span>All</span>
              <!-- <span>Lagos</span>
              <span>Kigali</span> -->
            </div>
          </div>
        </div>
        <div class="main">
          <form action="" class="career-form">
            <Icon name="lucide:search" />
            <input type="text" placeholder="Search all jobs" />
          </form>

          <div class="careers-oppurtunities__jobs">
            <nuxt-link to="" class="careers-oppurtunities__jobs-item">
              <div class="job__title">
                <h4>Product Manager</h4>
              </div>

              <div class="job__info">
                <div class="title">Product</div>
                <div class="location">Nigeria</div>
              </div>
            </nuxt-link>

            <nuxt-link
              to="/careers/job-details"
              class="careers-oppurtunities__jobs-item"
            >
              <div class="job__title">
                <h4>Node.js Backend Developer</h4>
              </div>

              <div class="job__info">
                <div class="title">Engineering</div>
                <div class="location">Nigeria</div>
              </div>
            </nuxt-link>

            <nuxt-link
              to="/careers/job-details"
              class="careers-oppurtunities__jobs-item"
            >
              <div class="job__title">
                <h4>Next.js Frontend Developer</h4>
              </div>

              <div class="job__info">
                <div class="title">Engineering</div>
                <div class="location">Nigeria</div>
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