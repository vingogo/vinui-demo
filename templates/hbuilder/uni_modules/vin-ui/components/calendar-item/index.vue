<template>
  <view
    class="vin-calendar vin-calendar-taro"
    :class="{
      'vin-calendar-tile': !poppable,
      'vin-calendar-nofooter': isAutoBackFill,
    }"
  >
    <!-- header -->
    <view class="vin-calendar-header" :class="{ 'vin-calendar-header-tile': !poppable }">
      <view class="calendar-title" v-if="showTitle">{{ title || translate('title') }}</view>
      <view class="calendar-top-slot" v-if="showTopBtn">
        <slot name="btn"> </slot>
      </view>
      <view class="calendar-curr-month" v-if="showSubTitle">{{ yearMonthTitle }}</view>
      <view class="calendar-weeks">
        <view class="calendar-week-item" v-for="(item, index) of weeks" :key="index">{{
          item
        }}</view>
      </view>
    </view>
    <!-- content-->
    <scroll-view
      :scroll-top="scrollTop"
      :scroll-y="true"
      class="vin-calendar-content"
      @scroll="mothsViewScroll"
      ref="months"
    >
      <view class="calendar-months-panel" :style="{ height: containerHeight }">
        <view class="viewArea" :style="{ transform: `translateY(${translateY}px)` }">
          <view class="calendar-month" v-for="(month, index) of compConthsDatas" :key="index">
            <view class="calendar-month-title">{{ month.title }}</view>
            <view class="calendar-month-con">
              <view class="calendar-month-item" :class="type === 'range' ? 'month-item-range' : ''">
                <template v-for="(day, i) of month.monthData" :key="i">
                  <view
                    class="calendar-month-day"
                    :class="getClass(day, month)"
                    @click="chooseDay(day, month)"
                  >
                    <!-- 日期显示slot -->
                    <view class="calendar-day">
                      <slot name="day" :date="day.type === 'curr' ? day : ''">
                        {{ day.type === 'curr' ? day.day : '' }}
                      </slot>
                    </view>
                    <view class="calendar-curr-tips calendar-curr-tips-top" v-if="topInfo">
                      <slot name="topInfo" :date="day.type === 'curr' ? day : ''"> </slot>
                    </view>
                    <view class="calendar-curr-tips calendar-curr-tips-bottom" v-if="bottomInfo">
                      <slot name="bottomInfo" :date="day.type === 'curr' ? day : ''"> </slot>
                    </view>
                    <view
                      class="calendar-curr-tip-curr"
                      v-if="!bottomInfo && showToday && isCurrDay(day)"
                    >
                      {{ translate('today') }}
                    </view>
                    <view
                      :class="{
                        'calendar-curr-tips-top': rangeTip(day, month),
                        'calendar-day-tip': true,
                      }"
                    >
                      {{ isStartTip(day, month) ? startText || translate('start') : '' }}
                    </view>
                    <view class="calendar-day-tip" v-if="isEndTip(day, month)">{{
                      endText || translate('end')
                    }}</view>
                  </view>
                </template>
              </view>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
    <!-- footer-->
    <view class="vin-calendar-footer" v-if="poppable && !isAutoBackFill">
      <view class="calendar-confirm-btn" @click="confirm">{{
        confirmText || translate('confirm')
      }}</view>
    </view>
  </view>
</template>
<script>import s from './index.js';export default s;</script>