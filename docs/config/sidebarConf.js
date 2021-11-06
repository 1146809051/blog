/**
 * config
 */
/**
 * 0. front-review  前端知识回顾
 * 0.1. review-javascript  javascript复习
 * 0.2. review-linux  linux复习
 */
// reviewFrontEnd  前端知识回顾
const reviewJavascriptConfig = require("../config/sidebarManage/note/front-review/review-javascript");
const reviewLinuxConfig = require("../config/sidebarManage/note/front-review/review-linux");

/**
 * 面试题
 * interview-base 基础面试题
 */
const interviewBaseConfig = require("../config/sidebarManage/interview/interview-base");

/**
 * test
 */
const testConfig = require("../config/sidebarManage/note/test");


module.exports = {
  /**
   * 学习笔记
   * JavaScript语言新发展
   */
  // 基础准备
  '/pages/note/front-review/': [
    '',
    reviewJavascriptConfig,  // javascript复习
    reviewLinuxConfig  // linux复习
  ],

  /**
   * 面试题
   */
  '/pages/interview/': [
    '',
    interviewBaseConfig,  // 基础面试题
    // interviewClassicConfig,  // 经典题库
  ],

  /**
   * test
   */
  '/pages/note/test/': [
    '',
    // testConfig,
    {
      title: 'test',
      collapsable: false,
      children: [
          'test-1',
          'test-2',
      ]
    }
  ],
};