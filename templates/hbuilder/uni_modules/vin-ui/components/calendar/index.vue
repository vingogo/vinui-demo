<template>
  <vin-popup
    v-if="poppable"
    v-model:visible="show"
    position="bottom"
    round
    closeable
    @click-overlay="closePopup"
    @click-close-icon="closePopup"
    :custom-style="{ height: '85vh' }"
  >
    <vin-calendar-item
      ref="calendarRef"
      :type="type"
      :is-auto-back-fill="isAutoBackFill"
      :poppable="poppable"
      :title="title"
      :default-value="defaultValue"
      :start-date="startDate"
      :end-date="endDate"
      @update="update"
      @close="close"
      @choose="choose"
      @select="select"
      v-if="show"
      :confirm-text="confirmText"
      :start-text="startText"
      :end-text="endText"
      :show-today="showToday"
      :show-title="showTitle"
      :show-sub-title="showSubTitle"
    >
      <template v-slot:btn v-if="showTopBtn">
        <slot name="btn"> </slot>
      </template>
      <template v-slot:day="date" v-if="dayInfo">
        <slot name="day" :date="date.date"> </slot>
      </template>
      <template v-slot:topInfo="date" v-if="topInfo">
        <slot name="topInfo" :date="date.date"> </slot>
      </template>
      <template v-slot:bottomInfo="date" v-if="bottomInfo">
        <slot name="bottomInfo" :date="date.date"> </slot>
      </template>
    </vin-calendar-item>
  </vin-popup>

  <vin-calendar-item
    v-else
    :type="type"
    :is-auto-back-fill="isAutoBackFill"
    :poppable="poppable"
    :title="title"
    :confirm-text="confirmText"
    :start-text="startText"
    :end-text="endText"
    :default-value="defaultValue"
    :start-date="startDate"
    :end-date="endDate"
    @close="close"
    @choose="choose"
    @select="select"
    :show-title="showTitle"
    :show-sub-title="showSubTitle"
    :show-today="showToday"
  >
    <template v-slot:btn v-if="showTopBtn">
      <slot name="btn"> </slot>
    </template>
    <template v-slot:day="date" v-if="dayInfo">
      <slot name="day" :date="date.date"> </slot>
    </template>
    <template v-slot:topInfo="date" v-if="topInfo">
      <slot name="topInfo" :date="date.date"> </slot>
    </template>
    <template v-slot:bottomInfo="date" v-if="bottomInfo">
      <slot name="bottomInfo" :date="date.date"> </slot>
    </template>
  </vin-calendar-item>
</template>
<script>import s from './index.js';export default s;</script>