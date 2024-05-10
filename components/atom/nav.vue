<template>
  <nav>
    <ul class="text-sm flex items-center gap-10">
      <li>
        <NuxtLink> Company Profile </NuxtLink>
      </li>
      <li class="relative">
        <NuxtLink class="font-semibold"> Book a Ride </NuxtLink>
        <div
          class="size-[5px] bg-primary-foreground rounded-full absolute -bottom-1.5 left-1/2 transform -translate-x-1/2"
        ></div>
      </li>
      <li>
        <NuxtLink> Rides </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup></script>
