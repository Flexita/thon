Page({
  data: {
    evaluate_contant: ['课堂记录'],
    stars: [0, 1, 2, 3, 4],
    normalSrc: '../../images/con_xing.png',
    selectedSrc: '../../images/con_xing2.png',
    score: 0,
    scores: [0, 0, 0],
  },

  // 提交事件
  submit_evaluate: function () {
    console.log('评价得分' + this.data.scores)
  },

  //点击左边,半颗星
  selectLeft: function (e) {
    var score = e.currentTarget.dataset.score
    if (this.data.score == 0.5 && e.currentTarget.dataset.score == 0.5) {
      score = 0;
    }

    this.data.scores[e.currentTarget.dataset.idx] = score,
    this.setData({
      scores: this.data.scores,
      score: score
    })
  },
  //点击右边,整颗星
  selectRight: function (e) {
    var score = e.currentTarget.dataset.score
    this.data.scores[e.currentTarget.dataset.idx] = score,
      this.setData({
        scores: this.data.scores,
        score: score
      })
  }
})