<template>
  <Layout>
    <div style="min-height: 600px" class>
      <div>
        <div
          class="el-card is-hover-shadow"
          style="margin-bottom: 20px"
          v-for="(project, index) in $page.projects.edges"
          :key="index"
        >
          <div class="el-card__header">
            <div>
              <div class="el-row">
                <div class="el-col el-col-16">
                  <span>
                    <a style="text-decoration: none">
                      <i class="el-icon-service"></i>
                      &nbsp;&nbsp; {{ project.node.title }}
                    </a>
                  </span>
                </div>
                <div class="el-col el-col-8">
                  <div style="text-align: right">
                    <button
                      type="button"
                      class="el-button el-button--text"
                      style="padding: 3px 0px"
                    >
                      <a
                        :href="project.node.url"
                        target="_blank"
                      >
                        <i class="el-icon-back"></i>
                        <span>前往Gitee</span>
                      </a>
                    </button>
                    <button
                      type="button"
                      class="el-button el-button--text"
                      style="padding: 3px 0px"
                    >
                      <!---->
                      <i class="el-icon-share"></i>
                      <!---->
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="el-card__body">
            <div
              style="
                font-size: 0.9rem;
                line-height: 1.5;
                color: rgb(96, 108, 113);
              "
            >
              最近更新 {{ project.node.updated_at }}
            </div>
            <div
              style="
                font-size: 1.1rem;
                line-height: 1.5;
                color: rgb(48, 49, 51);
                padding: 10px 0px 0px;
              "
            >{{ project.node.synopsis }}</div>
            <div
              style="
                font-size: 1.1rem;
                color: rgb(48, 49, 51);
                padding: 10px 0px 0px;
              "
            >
              <div class="el-row">
                <div class="el-col el-col-16" style="padding-top: 5px">
                  <i
                    class="el-icon-star-off el-tooltip"
                    aria-describedby="el-tooltip-3097"
                    tabindex="0"
                    style="margin: 0px 5px 0px 0px"
                  ></i>
                  {{ project.node.start }}
                  <i
                    class="el-icon-view el-tooltip"
                    aria-describedby="el-tooltip-1258"
                    tabindex="0"
                    style="margin: 0px 5px 0px 15px"
                  ></i>
                  {{ project.node.watch }}
                  <i
                    class="el-icon-bell el-tooltip"
                    aria-describedby="el-tooltip-4677"
                    tabindex="0"
                    style="margin: 0px 5px 0px 15px"
                  ></i>
                  {{ project.node.fork }}
                </div>
                <div class="el-col el-col-8" style="text-align: right">
                  <span
                    class="el-tag el-tag--danger el-tag--small"
                    v-for="(tag, index) in project.node.tags"
                    :key="index"
                  >
                    {{ tag.title }}
                    <!---->
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!---->
      <Pager :info="$page.projects.pageInfo" />
    </div>
  </Layout>
</template>
<page-query>
query($page: Int) {
  projects:allStrapiProject(perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        synopsis
        start
        watch
        fork
        url
        tags{
          id
          title
        }
      }
    }
  }
}
</page-query>
<script>
import MarkdownIt from "markdown-it";
import Common from '@/common.vue'
      

const md = new MarkdownIt();
import { Pager } from "gridsome";

export default {
  name: "Project",
  metaInfo: {
    title: "Project",
  },
  components: {
    Pager,
  },
  data() {
    return {
      host:Common.host
    }
  },
  methods: {
    mdToHtml(markdown) {
      return md.render(markdown);
    },
  },
};
</script>
