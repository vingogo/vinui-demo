<template>
  <view :class="mainClass" :style="mainStyle">
    <view class="vin-uploader__slot" v-if="$slots.default">
      <slot></slot>
      <template v-if="Number(maximum) > fileList.length">
        <view class="vin-uploader__input" @click="onChange"></view>
      </template>
    </view>

    <view
      class="vin-uploader__preview"
      :class="[listType]"
      v-for="(item, index) in fileList"
      :key="item.uid"
    >
      <view class="vin-uploader__preview-img" v-if="listType == 'picture' && !$slots.default">
        <view class="vin-uploader__preview__progress" v-if="item.status == 'ready'">
          <view class="vin-uploader__preview__progress__msg">{{ item.message }}</view>
        </view>
        <view class="vin-uploader__preview__progress" v-else-if="item.status != 'success'">
          <vin-icon color="#fff" :name="item.status == 'error' ? 'failure' : 'loading'"></vin-icon>
          <view class="vin-uploader__preview__progress__msg">{{ item.message }}</view>
        </view>
        <vin-icon
          v-if="isDeletable"
          @click="() => onDelete(item, index)"
          custom-class="close"
          name="failure"
        ></vin-icon>
        <img
          class="vin-uploader__preview-img__c"
          @click="() => fileItemClick(item)"
          v-if="item?.type?.includes('image') && item.url"
          :src="item.url"
        />
        <view v-else class="vin-uploader__preview-img__file">
          <view @click="() => fileItemClick(item)" class="vin-uploader__preview-img__file__name">
            <vin-icon color="#808080" name="link"></vin-icon>&nbsp;{{ item.name }}
          </view>
        </view>
        <view class="tips">{{ item.name }}</view>
      </view>
      <view class="vin-uploader__preview-list" v-else-if="listType == 'list'">
        <view
          @click="() => fileItemClick(item)"
          class="vin-uploader__preview-img__file__name"
          :class="[item.status]"
        >
          <vin-icon name="link" />&nbsp;{{ item.name }}
        </view>
        <vin-icon
          custom-class="vin-uploader__preview-img__file__del"
          @click="() => onDelete(item, index)"
          color="#808080"
          name="del"
        />
        <vin-progress
          size="small"
          :percentage="item.percentage"
          v-if="item.status == 'uploading'"
          stroke-color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
          :show-text="false"
        >
        </vin-progress>
      </view>
    </view>
    <view
      class="vin-uploader__upload"
      :class="[listType]"
      v-if="listType == 'picture' && !$slots.default && Number(maximum) - fileList.length > 0"
    >
      <vin-icon :size="uploadIconSize" color="#808080" :name="uploadIcon"></vin-icon>
      <view class="vin-uploader__input" @click="onChange"></view>
    </view>
  </view>
</template>
<script>import s from './index.js';export default s;</script>