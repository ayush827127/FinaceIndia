<template>
  <div class="mx-10 mt-24 ">
    <!-- Banner Section -->
    <!-- <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <div class="relative h-[300px] bg-cover bg-center text-white mt-20" :style="{
        backgroundImage:
          'url(https://www.shutterstock.com/image-photo/career-acceleration-concept-personal-development-260nw-435949057.jpg)',
      }">
        <div class="absolute inset-0 bg-opacity-70 flex items-center justify-center">
          <div class="text-center px-4 md:px-8">
            <h1 class="text-3xl md:text-4xl font-bold text-orange-400">Join Our Team</h1>
          </div>
        </div>
      </div>
    </transition> -->
    <!-- Header Section with Text and Linked Image -->
    <header class="w-full h-auto flex flex-col lg:flex-row justify-evenly items-center px-4 lg:px-10 mb-40">
      <!-- Left Side: Case Studies Text -->
      <div class="text-center lg:text-left mb-4 lg:mb-0">
        <h1 class="text-2xl lg:text-4xl font-bold mb-4">
          <span class="lg: lg:ml-0 ml-44 text-blue-900">Care</span> 
          <span class="text-orange-500">er</span>
        </h1>
        <p class="text-xl md:text-2xl mt-4">{{ currentQuote }}</p>
        <!-- <span class="block text-xl">The master key of knowledge is, indeed, a persistent and <br>frequent questioning.</span> -->
      </div>

      <!-- Right Side: Linked Image -->
    
      <img src="https://img.freepik.com/free-vector/helping-partner-concept-illustration_114360-8867.jpg?ga=GA1.1.1217921431.1721647597&semt=sph" alt="Header Image" class="h-full object-contain mx-auto" />
      
    </header>

    <!-- Designer Paragraph -->
    <!-- <transition name="slide-fade"> -->
    <!-- <div class="mt-20 p-4 md:p-8 bg-gray-300 rounded-md transition duration-500 ease-in-out transform hover:scale-105 hover:bg-gray-400">
      <p class="text-base md:text-lg text-gray-800 leading-relaxed animate-fadeIn">
        At our company, we believe in fostering creativity and innovation. Our team of designers is passionate about
        bringing ideas to life through thoughtful and impactful design. We value collaboration, growth, and a
        commitment to excellence. By joining us, you'll have the opportunity to work on exciting projects, learn from
        industry experts, and make a real difference in the world. We are looking for talented and driven individuals
        who are eager to push the boundaries of design and create something truly special. If you have a keen eye for
        detail and a love for all things design, we would love to hear from you.
      </p>
    </div> -->
    <!-- </transition> -->

    <!-- Image Section Label -->

    <div class="mt-28 text-center">
      <h2 class="text-2xl md:text-3xl text-blue-900">LIFE AT FINACE</h2>
    </div>

    <!-- Image Section -->
    <!-- <transition name="slide-fade"> -->
    <div class="mt-10">
      <div class="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-5 gap-1">
        <img src="https://via.placeholder.com/150" alt="Image 1"
          class="w-full h-auto rounded-md transition-transform duration-500 hover:scale-105" />
        <img src="https://via.placeholder.com/150" alt="Image 1"
          class="w-full h-auto rounded-md transition-transform duration-500 hover:scale-105" />
        <img src="https://via.placeholder.com/150" alt="Image 1"
          class="w-full h-auto rounded-md transition-transform duration-500 hover:scale-105" />
        <img src="https://via.placeholder.com/150" alt="Image 2"
          class="w-full h-auto rounded-md transition-transform duration-500 hover:scale-105" />
        <img src="https://via.placeholder.com/150" alt="Image 3"
          class="w-full h-auto rounded-md transition-transform duration-500 hover:scale-105" />
        <img src="https://via.placeholder.com/150" alt="Image 4"
          class="w-full h-auto rounded-md transition-transform duration-500 hover:scale-105" />
        <img src="https://via.placeholder.com/150" alt="Image 5"
          class="w-full h-auto rounded-md transition-transform duration-500 hover:scale-105" />
        <img src="https://via.placeholder.com/150" alt="Image 6"
          class="w-full h-auto rounded-md transition-transform duration-500 hover:scale-105" />
        <img src="https://via.placeholder.com/150" alt="Image 7"
          class="w-full h-auto rounded-md transition-transform duration-500 hover:scale-105" />
        <img src="https://via.placeholder.com/150" alt="Image 8"
          class="w-full h-auto rounded-md transition-transform duration-500 hover:scale-105" />
      </div>
    </div>
    <!-- </transition> -->

    <!-- Features Section -->
    <!-- <transition name="fade"> -->
    <div class="mt-20 flex flex-col gap-6 md:gap-10">
      <div class="flex flex-col md:flex-row items-center gap-6">
        <img src="https://via.placeholder.com/150" alt="Feature 1"
          class="w-36 h-auto rounded-md ml-8 transition-transform duration-500 hover:scale-110" />
        <div class="max-w-xl">
          <h3 class="text-xl md:text-2xl text-blue-900">Innovative Work Environment</h3>
          <p class="text-base md:text-lg text-gray-600 mt-2 leading-relaxed">
            Experience a dynamic and innovative work environment where creativity and new ideas are encouraged and
            rewarded.
          </p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row-reverse items-center gap-6">
        <img src="https://via.placeholder.com/150" alt="Feature 2"
          class="w-36 h-auto rounded-md mr-8 transition-transform duration-500 hover:scale-110" />
        <div class="max-w-xl">
          <h3 class="text-xl md:text-2xl text-blue-900">Professional Growth</h3>
          <p class="text-base md:text-lg text-gray-600 mt-2 leading-relaxed">
            Access to continuous learning and development opportunities to advance your career and stay ahead in the
            industry.
          </p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row items-center gap-6">
        <img src="https://via.placeholder.com/150" alt="Feature 3"
          class="w-36 h-auto rounded-md ml-8 transition-transform duration-500 hover:scale-110" />
        <div class="max-w-xl">
          <h3 class="text-xl md:text-2xl text-blue-900">Collaborative Team</h3>
          <p class="text-base md:text-lg text-gray-600 mt-2 leading-relaxed">
            Join a team of talented professionals who work together to achieve common goals and drive success.
          </p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row-reverse items-center gap-6">
        <img src="https://via.placeholder.com/150" alt="Feature 2"
          class="w-36 h-auto rounded-md mr-8 transition-transform duration-500 hover:scale-110" />
        <div class="max-w-xl">
          <h3 class="text-xl md:text-2xl text-blue-900">Employee Well-being</h3>
          <p class="text-base md:text-lg text-gray-600 mt-2 leading-relaxed">
            Benefit from comprehensive health and wellness programs designed to support your overall well-being.
          </p>
        </div>
      </div>
    </div>
    <!-- </transition> -->

    <!-- Employee Feedback Section -->
<div class="mt-28">
  <h2 class="text-2xl md:text-3xl text-center text-blue-900 mb-8">Employee Feedback</h2>
  <div class="flex flex-wrap justify-evenly h-[450px]">
    <!-- Video on the left half -->
    <div class="w-full md:w-1/2 bg-white shadow-lg rounded-md overflow-hidden">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <!-- Text block on the right half -->
    <div class="w-full md:w-1/2 flex flex-col gap-6 p-8 border border-gray-300 overflow-y-auto thin-scrollbar"
      style="max-height: 450px;">
      <div class="text-2xl pl-2 border-2 border-y-0 border-r-0 border-l-orange-500 text-blue-950">
        What Our <span class="text-orange-500">Employees</span> Say
      </div>
      <div class="mt-4">
        <div class="mb-6">
          <p class="text-lg font-semibold">Sarah Johnson</p>
          <p class="text-base text-gray-700">"Working at this company has been an amazing experience. The collaborative environment and opportunities for growth have truly helped me advance my career."</p>
        </div>
        <div class="mb-6">
          <p class="text-lg font-semibold">Michael Smith</p>
          <p class="text-base text-gray-700">"The team spirit here is incredible. Everyone is so supportive, and the leadership genuinely cares about our professional development."</p>
        </div>
        <div class="mb-6">
          <p class="text-lg font-semibold">Emma Davis</p>
          <p class="text-base text-gray-700">"I love the innovative culture and the emphasis on creativity. It's refreshing to work in an environment where new ideas are always encouraged."</p>
        </div>
        <div class="mb-6">
          <p class="text-lg font-semibold">James Wilson</p>
          <p class="text-base text-gray-700">"The work-life balance here is fantastic. I feel valued as an employee and appreciate the flexible working hours and supportive management."</p>
        </div>
      </div>
    </div>
  </div>
</div>


    <!-- Footer Section -->
    <!-- <transition name="fade"> -->
    <div class="mt-20 p-4 md:p-8 bg-zinc-600 mb-10 rounded-md">
      <h2 class="text-2xl md:text-3xl text-black">Job Openings</h2>
      <div class="flex flex-col gap-4 mt-4">
        <div v-for="(job, index) in jobs" :key="index" class="border border-gray-300 rounded-md overflow-hidden">
          <div class="flex justify-between items-center p-3 cursor-pointer bg-white" @click="toggle(index)">
            <span class="text-lg md:text-xl font-semibold">{{ job.title }}</span>
            <span class="text-xl">{{ job.open ? "-" : "+" }}</span>
          </div>
          <!-- <transition name="fade"> -->
          <div v-if="job.open" class="p-3 bg-white">
            <p><strong>Requirements:</strong>{{ job.description }}</p>
            <p><strong>Number of Openings:</strong> {{ job.openings }}</p>
            <p><strong>Email your resume to :</strong> <a href="mailto:hr@finaceindia.com"
                class="text-blue-500">hr@finaceindia.com</a></p>
          </div>
          <!-- </transition> -->
        </div>
      </div>
    </div>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      quotes: [
        "Choose a job you love, and you will never have to work a day in your life.",
        "The future depends on what you do today.",
        "Act as if what you do makes a difference. It does.",
        "Success is not the key to happiness. Happiness is the key to success.",
      ],
      currentQuote: "",
      jobs: [
        { title: "Graphic Designer", description: "Create visual concepts to communicate ideas.", openings: 3, open: false },
        { title: "UI/UX Designer", description: "Design user-friendly interfaces for applications.", openings: 2, open: false },
        { title: "Web Designer", description: "Design and layout websites to meet client needs.", openings: 4, open: false },
      ],
      openIndex: null,
      intervalId: null,
    };
  },
  created() {
    this.changeQuote(); // Initial quote change
  },
  mounted() {
    this.intervalId = setInterval(this.changeQuote, 5000);
  },
  beforeDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  },
  methods: {
    changeQuote() {
      const randomIndex = Math.floor(Math.random() * this.quotes.length);
      this.currentQuote = this.quotes[randomIndex];
    },
    toggle(index) {
      this.openIndex = this.openIndex === index ? null : index;
      this.jobs.forEach((job, i) => {
        job.open = i === this.openIndex;
      });
    },
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      el.offsetHeight; // trigger reflow
      el.style.transition = 'opacity 0.5s ease';
      el.style.opacity = 1;
      done();
    },
    leave(el, done) {
      el.style.transition = 'opacity 0.5s ease';
      el.style.opacity = 0;
      done();
    },
  },
};
</script>

<style>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fadeIn {
  animation: fadeIn 2s ease-in-out;
}
</style>
