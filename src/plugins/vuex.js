import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shelf: {},
    bookNum: 0,
    currentBookID: "",
    noteUrl: "",
    catalog: "",
    chapterName: "",
    chapterUrl: "",
    chapterID: 0,
    bookName: "",
    readingBook: {},
    popCataVisible: false,
    contentLoading: true,
    config: {
      theme: 0,
      font: 0,
      fontSize: 18,
      readWidth: 800
    },
    readSettingsVisible: false
  },
  mutations: {
    increaseBookNum(state, n) {
      state.bookNum = n;
    },
    addBooks(state, books) {
      state.shelf = books;
    },
    setCurrentBook(state, name) {
      state.currentBookID = name.MD5();
    },
    setNoteUrl(state, url) {
      state.noteUrl = url;
    },
    setCatalog(state, catalog) {
      state.catalog = catalog;
    },
    setChapterName(state, chapterName) {
      state.chapterName = chapterName;
    },
    setChapterUrl(state, chapterUrl) {
      state.chapterUrl = chapterUrl;
    },
    setChapterID(state, chapterID) {
      state.chapterID = chapterID;
    },
    setBookName(state, bookName) {
      state.bookName = bookName;
    },
    setPopCataVisible(state, visible) {
      state.popCataVisible = visible;
    },
    setContentLoading(state, loading) {
      state.contentLoading = loading;
    },
    setReadingBook(state, readingBook) {
      state.readingBook = readingBook;
    },
    setConfig(state, config) {
      state.config = config;
    },
    setReadSettingsVisible(state, visible) {
      state.readSettingsVisible = visible;
    }
  }
});
