<template>
  <div class="flex w-full">
    <div class="text-black flex mt-36 lg:mt-16">
      <ToolSideBar></ToolSideBar>
    </div>
    <div class="w-full flex mt-24 lg:mt-20  mb-10 justify-center">
      <div class="w-full">
        <template v-if="$route.params.tools === 'emi-calculator'">
          <ToolsEmi-calculator/>
        </template>
        <template v-else-if="$route.params.tools === 'ppf-calculator'">
          <ToolsPf-calculator/>
        </template>
        <template v-else-if="$route.params.tools === 'postoffice-scheme'">
          <ToolsPostOffice-Scheme/>
        </template>
        <template v-else-if="$route.params.tools === 'elss-calculator'">
          <ToolsElssCalculator/>
        </template>
         <template v-else-if="$route.params.tools === 'sip-calculator'">
          <ToolsSipCalculator/>
        </template>
          <template v-else-if="$route.params.tools === 'gratuity-calculator'">
          <ToolsGratuityCalculator/>
        </template>
        <template v-else-if="$route.params.tools === 'swp-calculator'">
          <ToolsSwp/>
        </template> 
          <template v-else-if="$route.params.tools === 'income-tax-calculator'">
          <ToolsIncomeTaxCalculator/>
        </template>
          <template v-else-if="$route.params.tools === 'hra-calculator'">
          <ToolsHraCalculator/>
        </template>
           <template v-else-if="$route.params.tools === 'zero-coupon-bond'">
          <ToolsZeroCouponBondCalculator/>
        </template>
            <template v-else-if="$route.params.tools === 'real-estate'">
          <ToolsRealEstateCalculator/>
        </template>
        <template v-else-if="$route.params.tools === 'old-new-regime'">
          <ToolsOldandNewRegime/>
        </template>
        <template v-else>
          <ToolsErrorPage/>
        </template> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Add any necessary component options here
};
</script>

<style>
/* Add your styles here */
</style>
