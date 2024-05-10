<template>
  <section>
    <form class="bg-background px-4 py-5 rounded-lg max-w-96 grid gap-20 shadow-sm">
      <div class="grid gap-3">
        <h2 class="text-xl font-semibold">Book a Ride</h2>

        <Select>
          <SelectTrigger>
            <div class="grid text-start">
              <span class="text-xm">Ride type</span>
              <span class="text-sm font-light">Select type of ride</span>
            </div>
            <!-- <SelectValue placeholder="Select a fruit" /> -->
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Airport Transfer"> Airport Transfer </SelectItem>
              <SelectItem value="By Hour"> By Hour </SelectItem>
              <SelectItem value="For a Day"> For a Day </SelectItem>
              <SelectItem value="City to city"> City to city </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div class="flex items-center gap-2.5"></div>

      <div class="grid gap-4">
        <div class="flex items-center justify-between text-xs">
          <span>Payment Method</span>
          <div class="flex items-center gap-1">
            <span class="font-bold">Balance . SAR 20,450.00</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.0835 4.16658L12.9168 9.99992L7.0835 15.8333"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <Button
          type="submit"
          :disabled="true"
          class="disabled:bg-[#0000000D] disabled:text-[#00000033]"
        >
          Submit
        </Button>
      </div>
    </form>
  </section>
</template>

<script lang="ts" setup></script>
