<template>
  <vin-tabs custom-class="vin-cascader" v-model="tabsCursor" @click="handleTabClick" title-scroll>
    <template v-if="!initLoading && panes.length">
      <vin-tabpane v-for="(pane, index) in panes" :title="formatTabTitle(pane)" :key="index">
        <view role="menu" class="vin-cascader-pane">
          <template v-for="node in pane.nodes" :key="node.value">
            <view
              class="vin-cascader-item"
              :aria-checked="isSelected(pane, node)"
              :aria-disabled="node.disabled || undefined"
              :class="{
                active: isSelected(pane, node),
                disabled: node.disabled,
              }"
              role="menuitemradio"
              @click="handleNode(node, false)"
            >
              <view class="vin-cascader-item__title">{{ node.text }}</view>

              <vin-icon
                v-if="node.loading"
                custom-class="vin-cascader-item__icon-loading"
                name="loading"
              />
              <vin-icon v-else custom-class="vin-cascader-item__icon-check" name="checklist" />
            </view>
          </template>
        </view>
      </vin-tabpane>
    </template>
    <template v-else>
      <vin-tabpane title="Loading...">
        <view class="vin-cascader-pane"></view>
      </vin-tabpane>
    </template>
  </vin-tabs>
</template>
<script>import s from './index.js';export default s;</script>