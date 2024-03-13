<template>
  <el-row justify="center">
    <!-- 搜索栏start -->
    <div class="search">
      <el-input
        v-model="searchVal"
        clearable
        input-style="border:none;"
        @keyup.enter="gotoSearch"
      >
        <template #prepend>
          <el-select
            v-model="searchEngine"
            style="width: 90px"
            size="large"
            @change="searchEngineChange"
          >
            <el-option
              :label="item.name"
              :value="index"
              v-for="(item, index) of searchs"
            />
          </el-select>
        </template>
        <template #append>
          <el-button type="primary" @click="gotoSearch">搜索</el-button>
        </template>
      </el-input>
      <el-tag
        size="large"
        style="margin-left: 8px; color: #fafafa; cursor: pointer"
        @click="showHightSearch"
        color="#b1b19e"
        disable-transitions
        >高级</el-tag
      >
    </div>

    <!-- 内容start -->
    <div class="jianjie">
      <div class="jj-list" v-for="item of navigationList">
        <div class="jj-list-tit">{{ item.category }}</div>
        <ul class="jj-list-con">
          <li v-for="item1 of item.children">
            <a
              :href="item1.link"
              class="link-3"
              rel="nofollow"
              target="_blank"
              @click="jumpA(item1.link, $event)"
              >{{ item1.title }}</a
            >
          </li>
        </ul>
      </div>
    </div>

    <el-dialog
      v-model="dialogShow"
      title="高级搜索"
      :show-close="false"
      :close-on-click-modal="false"
      @close="dialogClose"
    >
      <el-form>
        <el-form-item label="来源 : ">
          <el-space :size="1">
            <el-checkbox
              v-model="checkAllIncludes"
              :indeterminate="isIndeterminateIncludes"
              @change="handleCheckAllIncludesChange"
              >全选</el-checkbox
            >
          </el-space>
          <el-checkbox-group
            v-model="checkedIncludes"
            @change="handleCheckedIncludesChange"
          >
            <el-checkbox
              v-for="item in includes"
              :key="item.link"
              :label="item.link"
              >{{ item.title }}</el-checkbox
            >
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="排除 : ">
          <el-space :size="1">
            <el-checkbox
              v-model="checkAllExcludes"
              :indeterminate="isIndeterminateExcludes"
              @change="handleCheckAllExcludesChange"
              >全选</el-checkbox
            >
          </el-space>
          <el-checkbox-group
            v-model="checkedExcludes"
            @change="handleCheckedExcludesChange"
          >
            <el-checkbox
              v-for="item in excludes"
              :key="item.link"
              :label="item.link"
              >{{ item.title }}</el-checkbox
            >
          </el-checkbox-group>
        </el-form-item>
        <el-form-item class="once-search">
          <el-button type="primary" plain @click="onceSearch"
            >仅本次搜索</el-button
          >
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogShow = false">取消</el-button>
          <el-button type="primary" @click="saveStorage"> 保存 </el-button>
        </span>
      </template>
    </el-dialog>
  </el-row>
</template>
<script setup>
import { computed, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { storageHandler } from "../assets/js/tool";
import {
  ElButton,
  ElRow,
  ElCol,
  ElOption,
  ElSelect,
  ElInput,
  ElTag,
  ElCheckbox,
  ElSpace,
  ElCheckboxGroup,
  ElFormItem,
  ElForm,
  ElDialog,
} from "element-plus";

const { navigations, searchs, includes, excludes } = window.__nav_data;
const router = useRouter();
const searchKey = "SEARCH_KEY";
const searchEngineDefault = "SEARCH_ENGINE_DEFAULT";
const searchVal = ref("");
const searchEngine = ref(1);
const searchRules = ref("");
const dialogShow = ref(false);

const includesTemp = includes.map((item) => item.link);
const checkAllIncludes = ref(false);
const isIndeterminateIncludes = ref(false);
const checkedIncludes = ref([]);

const handleCheckAllIncludesChange = (val) => {
  reset("0");
  checkedIncludes.value = val ? includesTemp : [];
  isIndeterminateIncludes.value = false;
};
const handleCheckedIncludesChange = (value) => {
  reset("0");
  const checkedCount = value.length;
  checkAllIncludes.value = checkedCount === includes.length;
  isIndeterminateIncludes.value =
    checkedCount > 0 && checkedCount < includes.length;
};

const excludesTemp = excludes.map((item) => item.link);
const checkAllExcludes = ref(false);
const isIndeterminateExcludes = ref(false);
const checkedExcludes = ref([]);

const handleCheckAllExcludesChange = (val) => {
  reset("1");
  checkedExcludes.value = val ? excludesTemp : [];
  isIndeterminateExcludes.value = false;
};
const handleCheckedExcludesChange = (value) => {
  reset("1");
  const checkedCount = value.length;
  checkAllExcludes.value = checkedCount === excludes.length;
  isIndeterminateExcludes.value =
    checkedCount > 0 && checkedCount < excludes.length;
};
const jumpA = (link, e) => {
  if (link === "#") {
    e.preventDefault();
  }
  if (link.startsWith("/")) {
    router.push({ path: link });
    e.preventDefault();
  }
};
const reset = (flag) => {
  if (flag !== "0") {
    checkedIncludes.value = [];
    checkAllIncludes.value = false;
    isIndeterminateIncludes.value = false;
  }

  if (flag !== "1") {
    checkedExcludes.value = [];
    checkAllExcludes.value = false;
    isIndeterminateExcludes.value = false;
  }
};

const showHightSearch = () => {
  dialogShow.value = true;
};
const onceSearch = () => {
  gotoSearch();
};
const gotoSearch = () => {
  if (!searchVal.value) return;
  const { link, key } = searchs[searchEngine.value];
  searchHandler();
  const url = `${link}?${key}=${searchVal.value}${searchRules.value}`;
  window.open(url);
};
const searchHandler = () => {
  searchRules.value = "";
  checkedIncludes.value.forEach((item, index) => {
    const key = index === 0 ? " " : " | ";
    searchRules.value += key + "site:" + item;
  });
  checkedExcludes.value.forEach((item, index) => {
    const key = " ";
    searchRules.value += key + "-site:" + item;
  });
};
const navigationList = computed(() => {
  // 模拟数据
  const result = navigations;
  result.forEach((item) => {
    const temp = Array.from(Array(9), () => {
      return {
        title: "---",
        link: "#",
      };
    });
    item.children.forEach((item1, index1) => {
      temp[index1] = item1;
    });

    item.children = temp;
  });
  return result;
});

const dialogClose = () => {
  init();
};

const saveStorage = () => {
  let temp = null;
  if (checkedIncludes.value.length > -1) {
    temp = {
      index: "0",
      checkedList: checkedIncludes.value,
    };
  }
  if (checkedExcludes.value.length > -1) {
    temp = {
      index: "1",
      checkedList: checkedExcludes.value,
    };
  }
  if (temp) {
    storageHandler(searchKey, JSON.stringify(temp));
  }
  dialogShow.value = false;
};
const searchEngineChange = () => {
  storageHandler(searchEngineDefault, searchEngine.value);
};
const init = () => {
  const storage = storageHandler(searchKey);
  const searchEngineDefaultTemp = storageHandler(searchEngineDefault);
  reset();
  if (storage) {
    if (storage.index === "0") {
      const checkedCount = storage.checkedList.length;
      checkedIncludes.value = storage.checkedList;
      checkAllIncludes.value = checkedCount === includes.length;
      isIndeterminateIncludes.value =
        checkedCount > 0 && checkedCount < includes.length;
    }
    if (storage.index === "1") {
      const checkedCount = storage.checkedList.length;
      checkedExcludes.value = storage.checkedList;
      checkAllExcludes.value = checkedCount === excludes.length;
      isIndeterminateExcludes.value =
        checkedCount > 0 && checkedCount < excludes.length;
    }
  }

  if (searchEngineDefaultTemp) {
    searchEngine.value = Number(searchEngineDefaultTemp);
  }
};

onMounted(() => {
  init();
});
</script>

<style scoped>
.search {
  width: 50vw;
  margin: 20vh 0 80px;
  display: flex;
  align-items: center;
}

.el-input {
  height: 48px;
}

.el-checkbox-group {
  margin-left: 16px;
}

.el-form-item {
  align-items: center;
}

:deep(.el-input) {
  --el-input-border-color: none;
  --el-border-color-hover: none;
  --el-input-hover-border-color: none;
  --el-input-clear-hover-color: none;
  --el-input-focus-border-color: none;
  --el-input-focus-border: none;
}

:deep(.once-search .el-form-item__content) {
  justify-content: end;
}

:deep(.search .el-input__wrapper:hover) {
  box-shadow: none;
}

:deep(.search .el-input__wrapper.is-focus) {
  box-shadow: none;
}

.jianjie {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.jj-list {
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
}

.jj-list-tit {
  width: 350px;
  font-size: 16px;
  line-height: 25px;
  font-weight: 600;
  color: #cba364;
  padding-left: 4px;
}

.jj-list-con {
  width: 350px;
  display: flex;
  flex-wrap: wrap;
}

.jj-list-con li {
  width: 110px;
  height: 42px;
  margin: 3px 3px;
}

.link-3 {
  display: block;
  background: rgba(0, 0, 0, 0.35);
  color: #fff;
  font-size: 13px;
  text-align: center;
  line-height: 35px;
  padding: 4px 0;
  border-radius: 2px;
  transition: all 0.2s;
  z-index: 1;
  text-decoration: none;
}

.link-3:hover {
  background: rgba(0, 0, 0, 0.45);
  font-size: 15px;
  font-weight: bold;
}

[v-cloak] {
  display: none;
}

/* 适配移动端 */

@media screen and (max-width: 1200px) {
  .jj-list {
    width: 50vw;
  }
}

@media screen and (max-width: 750px) {
  .search {
    width: 90vw;
  }

  .jj-list {
    width: 100vw;
  }
}
</style>
