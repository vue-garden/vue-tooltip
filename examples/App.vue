<template>
<div class="demo">
  <div class="top">
    <tooltip placement="top-left" :visible="visible" mode="manual">
      <div slot="outlet" class="test">top left</div>
      <div slot="tooltip">this is top left tip</div>
    </tooltip>
    <tooltip placement="top" :visible="visible" mode="manual">
      <div slot="outlet" class="test">top</div>
      <div slot="tooltip">this is top tip</div>
    </tooltip>
    <tooltip placement="top-right" :visible="visible" mode="manual">
      <div slot="outlet" class="test">top right</div>
      <div slot="tooltip">this is top right tip</div>
    </tooltip>
  </div>

  <div class="left">
    <tooltip placement="left-top" :visible="visible" mode="manual">
      <div slot="outlet" class="test">left top</div>
      <div slot="tooltip">
        <div>this is left top tip</div>
        <div>line 2</div>
        <div>line 3</div>
      </div>
    </tooltip>
    <tooltip placement="left" :visible="visible" mode="manual">
      <div slot="outlet" class="test">left</div>
      <div slot="tooltip">
        <div>this is left tip</div>
        <div>line 2</div>
        <div>line 3</div>
      </div>
    </tooltip>
    <tooltip placement="left-bottom" :visible="visible" mode="manual">
      <div slot="outlet" class="test">left bottom</div>
      <div slot="tooltip">
        <div>this is left bottom tip</div>
        <div>line 2</div>
        <div>line 3</div>
      </div>
    </tooltip>
  </div>

  <div class="right">
    <tooltip placement="right-top" :visible="visible" mode="manual">
      <div slot="outlet" class="test">right top</div>
      <div slot="tooltip">
        <div>this is right top tip</div>
        <div>line 2</div>
        <div>line 3</div>
      </div>
    </tooltip>
    <tooltip placement="right" :visible="visible" mode="manual">
      <div slot="outlet" class="test">right</div>
      <div slot="tooltip">
        <div>this is right tip</div>
        <div>line 2</div>
        <div>line 3</div>
      </div>
    </tooltip>
    <tooltip placement="right-bottom" :visible="visible" mode="manual">
      <div slot="outlet" class="test">right bottom</div>
      <div slot="tooltip">
        <div>this is right bottom tip</div>
        <div>line 2</div>
        <div>line 3</div>
      </div>
    </tooltip>
  </div>

  <div class="bottom">
    <tooltip placement="bottom-left" :visible="visible" mode="manual">
      <div slot="outlet" class="test">bottom left</div>
      <div slot="tooltip">this is bottom left tip</div>
    </tooltip>
    <tooltip placement="bottom" :visible="visible" mode="manual">
      <div slot="outlet" class="test">bottom</div>
      <div slot="tooltip">this is bottom tip</div>
    </tooltip>
    <tooltip placement="bottom-right" :visible="visible" mode="manual">
      <div slot="outlet" class="test">bottom right</div>
      <div slot="tooltip">
        <div>this is bottom right tip</div>
        <div>next line</div>
      </div>
    </tooltip>
  </div>

  <div class="confirm">
    <tooltip placement="bottom-left" mode="click" :invisible="invisible">
      <div slot="outlet" class="test">
        Remove
      </div>
      <div slot="tooltip">
        <h3>Are your sure?</h3>
        <div class="btns">
          <button class="yes" @click="handleYes">Yes</button>
          <button class="no" @click="handleNo">No</button>
        </div>
      </div>
    </tooltip>
  </div>
</div>
</template>

<script>
import 'main'

export default {
  data() {
    return {
      visible: false,
      invisible: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.visible = true
    }, 1000)
  },
  methods: {
    handleYes() {
      alert('Yes')
    },
    handleNo() {
      alert('No')
      this.invisible = true
    }
  }
}
</script>

<style>
.demo {
  width: 600px;
  margin: 100px auto;
}

.demo>div {
  text-align: center;
}

.demo>.top>.hsy-tooltip,
.demo>.bottom>.hsy-tooltip {
  display: inline-block;
}

.test {
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: #ddd;
}

div.top {
  margin-bottom: 15px;
}

div.left {
  float: left;
}

div.right {
  float: right;
}

div.bottom {
  clear: both;
}

div.right .test,
div.left .test {
  height: 50px;
  line-height: 50px;
  margin-bottom: 30px;
}

div.top .test,
div.bottom .test {
  height: 50px;
  line-height: 50px;
}

div.top .hsy-tooltip,
div.bottom .hsy-tooltip {
  width: 160px;
  text-align: center;
}

.hsy-tooltip .tooltip,
.hsy-tooltip .tooltip {
  text-align: left;
}

div.top .hsy-tooltip .outlet,
div.bottom .hsy-tooltip .outlet {
  display: inline-block;
}

div.confirm {
  margin-top: 50px;
}

div.confirm button {
  border: 0;
  border-radius: 3px;
  padding: 8px 10px;
  cursor: pointer;
  outline: none;
}

div.confirm .test,
div.confirm .no {
  color: #fff;
  background-color: #f84f47;
}

div.confirm .yes {
  color: #fff;
  background-color: #0097ff;
}

div.confirm h3 {
  margin: 0;
  font-size: 14px;
  font-weight: normal;
  padding: 10px 0;
}

div.confirm .btns {
  padding-bottom: 5px;
  overflow: hidden;
}

div.confirm .btns .yes {
  float: left;
}

div.confirm .btns .no {
  float: right;
}
</style>
