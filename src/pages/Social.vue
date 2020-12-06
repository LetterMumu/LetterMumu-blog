<template>
  <Layout>
    <div
      class="el-card is-never-shadow"
      style="min-height: 400px; margin-bottom: 20px; padding: 0px 0px 20px;"
    >
      <div class="el-card__body">
        <div class="el-tabs el-tabs--card el-tabs--top">
          <div class="el-tabs__header is-top">
            <div class="el-tabs__nav-wrap is-top">
              <div class="el-tabs__nav-scroll">
                <div role="tablist" class="el-tabs__nav" style="transform: translateX(0px);">
                  <div
                    id="tab-followers"
                    aria-controls="pane-followers"
                    role="tab"
                    tabindex="-1"
                    class="el-tabs__item is-top"
                    :class="isFans ? 'is-active' : ''"
                    @click="changeStatus(true)"
                  >粉丝 {{$page.fans.totalCount}}</div>
                  <div
                    id="tab-following"
                    aria-controls="pane-following"
                    role="tab"
                    tabindex="0"
                    class="el-tabs__item is-top"
                    :class="!isFans ? 'is-active' : ''"
                    @click="changeStatus(false)"
                    aria-selected="true"
                  >关注 {{$page.idol.totalCount}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="el-tabs__content">
            <div
              role="tabpanel"
              id="pane-following"
              aria-labelledby="tab-following"
              class="el-tab-pane"
              style="padding: 5px;"
            >
              <div class>
                <div>
                  <div class="el-row" style="min-height: 200px;">
                    <div
                      class="el-col el-col-8"
                      style="padding: 10px;"
                      v-for="(item, index) in list"
                      :key="index"
                    >
                      <div
                        class="el-card is-hover-shadow"
                        style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"
                      >
                        <!---->
                        <div class="el-card__body">
                          <!-- <i class="following.node.isFollowing?'el-icon-star-off':'el-icon-star-on'"></i> -->
                          <a
                            style="text-decoration: none; cursor: pointer;"
                          >{{ item.node.name }}</a>
                          <br />
                          <i class="el-icon-message"></i>
                          <a
                            :href="item.node.url"
                            target="_blank"
                            style="text-decoration: none; cursor: pointer;"
                          >TA的主页</a>
                          <br />
                          <img
                            :src="host + item.node.img.url" 
                            style="width: 100%; border-radius: 5px; margin-top: 5px;"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <Pager :info="$page.idol.pageInfo" v-if="!isFans" />
          <Pager :info="$page.fans.pageInfo" v-else /> -->
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query {
  fans: allStrapiFans {
    totalCount
    edges {
      node {
        name
        url
        img {
          url
        }
      }
    }
  }
  idol: allStrapiIdol {
    totalCount
    edges {
      node {
        name
        url
        img {
          url
        }
      }
    }
  }
}
</page-query>
<script>
import { Pager } from "gridsome"
import Common from '@/common.vue'

export default {
  name:"Social",
  data() {
    return {
      isFans: true,
      host:Common.host
    };
  },
  components: {
    Pager,
  },
  computed:{
    list(){
      return this.isFans ? this.$page.fans.edges : this.$page.idol.edges
    }
  },
  methods: {
    changeStatus(boo) {
      if (this.$route.path !== '/social') {
        this.$router.push('/social')
      }
      this.isFans = boo;
    },
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
