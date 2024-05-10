<template>
  <ScrollArea
    class="h-screen bg-cover bg-center"
    :style="{
      backgroundImage: 'url(/bg.png)',
    }"
  >
    <div>
      <header
        class="bg-primary text-primary-foreground h-16 flex items-center justify-between alley"
      >
        <div class="flex items-center gap-4 lg:gap-[72px]">
          <AtomMenu class="lg:hidden" />
          <AtomLogo class="h-5 lg:h-7" />
          <AtomNav class="hidden lg:flex" />
        </div>

        <div class="hidden lg:flex items-center gap-6">
          <div class="grid">
            <span class="text-xs">Balance</span>
            <span class="font-semibold">50,600.0 SAR</span>
          </div>

          <Separator orientation="vertical" class="h-16 bg-white/30" />

          <DropdownMenu>
            <DropdownMenuTrigger class="flex items-center gap-16">
              <div class="flex items-center gap-2.5">
                <Avatar>
                  <AvatarImage src="/avatar.jpeg" alt="@radix-vue" />
                  <AvatarFallback>KA</AvatarFallback>
                </Avatar>

                <div class="flex flex-col items-start">
                  <span class="font-medium">Khuzimah A.</span>
                  <span class="text-xs">Cabrio Co.</span>
                </div>
              </div>

              <IconArrowDown class="size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" class="mt-6 w-52">
              <DropdownMenuItem class="gap-2">
                <IconSettings class="size-4" />
                <span>Profile Settings</span>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem class="gap-2">
                <IconLanguage class="size-4" />
                <span>العربية</span>
              </DropdownMenuItem>

              <div class="mx-1 mt-1">
                <Button
                  class="font-semibold w-full border-primary border-2"
                  variant="outline"
                  >Logout</Button
                >
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main class="alley py-6 lg:py-8">
        <slot />
      </main>
    </div>
  </ScrollArea>
</template>

<script lang="ts" setup></script>
