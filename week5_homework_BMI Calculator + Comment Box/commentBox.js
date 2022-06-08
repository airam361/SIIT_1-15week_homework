let comments = document.querySelector(".comments");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let commentInput = document.getElementById("comment");
let btnAddComment = document.getElementById("addComment");

let showReplies = true;
let idReply = null;

///////----DUMMY COMMENTS ----///////
let commentsArr = [
  {
    id: 359468,
    name: "Mary Jane",
    date: "05-3-2022 17:29",
    email: "mary.jane@email.com",
    comment:
      "I'm in a good condition! I'm glad I didn't gained wight in the lock-down. :)",
    reply: [
      {
        id: 426515,
        name: "John",
        date: "08-3-2022 17:29",
        email: "test@email.com",
        comment: "Good for you! I couldn't say the same for me...",
        reply: [],
      },
      {
        id: 426518,
        name: "Johnny",
        date: "09-3-2022 17:29",
        email: "test@email.com",
        comment: "Lucky you! ;)",
        reply: [],
      },
    ],
  },
  {
    id: 326485,
    name: "Jack R.",
    date: "12-3-2022 10:54",
    email: "jack.r@email.com",
    comment:
      "My BMI says that I'm overweighted, so I guess i should start a diet...",
    reply: [
      {
        id: 312654,
        name: "Star Gym",
        date: "13-3-2022 17:29",
        email: "test@email.com",
        comment:
          "Would you be interested in an online subscription to our Gym?",
        reply: [
          {
            id: 136428,
            name: "Guy007",
            date: "15-3-2022 17:29",
            email: "test@email.com",
            comment: "I'm interested",
            reply: [],
          },
        ],
      },
    ],
  },
];

///////----HELPER FUNCTIONS----///////

function idGenerator() {
  // let id = Math.floor(Math.random() * 1000000);
  let id = new Date().getTime();
  return id;
}

function getCurrentDate() {
  let today = new Date();
  let date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  let time = today.getHours() + ":" + today.getMinutes();
  let dateTime = date + " " + time;
  return dateTime;
}

function createCommentTemplate(obj) {
  return `
      <div class="comment">
        <div class="flex">
          <label class="comment__name">${obj.name}</label>
          <label class="comment__date">${obj.date}</label>
        </div>
        <p class="comment__content">${obj.comment}</p>
        <div class="comment__actions">
          <div class="flex">
            <button class="replyComment" commentid="${obj.id}">
              <a href="#commentform">
                <span class="material-icons-round"> reply </span>
                <span>Reply</span>
              </a>            
            </button>
            <button class="showReplyComment" commentid="${obj.id}">
              <span
                class="material-icons-round"
                iconVisible="whenRepliesHidden"
              >
                visibility
              </span>
              <span
                class="material-icons-round hidden"
                iconVisible="whenRepliesVisible"
              >
                visibility_off
              </span>
              <span>&nbsp;${obj.reply.length}&nbsp;Replies</span>
            </button>
          </div>
          <button class="deleteComment" commentid="${obj.id}">
            <span class="material-icons-round"> delete </span>
            <span>Delete</span>
          </button>
        </div>

        <div class="comment__reply" commentid="${obj.id}"></div>
        <hr />
      </div>
    `;
}

///////----COMMENTS FUNCTIONALITIES ----///////

function buildCommentTree(parentArray, parentElement) {
  parentArray.forEach((parent) => {
    parentElement.innerHTML += createCommentTemplate(parent);
    if (showReplies && parent.reply.length !== 0) {
      buildCommentTree(
        parent.reply,
        document.querySelector(`.comment__reply[commentId="${parent.id}"]`)
      );
    }
  });
}

function addComment(array) {
  let commentObj = {
    id: "",
    name: "",
    date: "",
    email: "",
    comment: "",
    reply: [],
  };
  commentObj.id = idGenerator();
  commentObj.name = nameInput.value;
  commentObj.date = getCurrentDate();
  commentObj.email = emailInput.value;
  commentObj.comment = commentInput.value;
  array.push(commentObj);
}

function deleteComment(parentArray, commentId) {
  parentArray.forEach((parentObj) => {
    parentObj.reply = deleteComment(parentObj.reply, commentId);
  });

  return parentArray.filter((item) => item.id !== Number(commentId));
}

function addReply(id, parentArray) {
  for (let i = 0; i < parentArray.length; i++) {
    if (parentArray[i].id === id) {
      addComment(parentArray[i].reply);
    } else if (parentArray[i].reply.length !== 0) {
      addReply(id, parentArray[i].reply);
    }
  }
}

function createCommentEvents() {
  let deleteComments = document.querySelectorAll(".deleteComment");
  let replyComments = document.querySelectorAll(".replyComment");
  let showReplyComment = document.querySelectorAll(".showReplyComment");

  deleteComments.forEach((item) => {
    item.addEventListener("click", deleteCommentHandler);
  });
  replyComments.forEach((item) => {
    item.addEventListener("click", replyCommentHandler);
  });
  showReplyComment.forEach((item) => {
    item.addEventListener("click", showReplyCommentHandler);
  });
}

function displayComments() {
  comments.innerHTML = "";
  buildCommentTree(commentsArr, comments);
  createCommentEvents();
}

function resetCommentForm() {
  nameInput.value = "";
  emailInput.value = "";
  commentInput.value = "";
}

///////----EVENT HANDLERS----///////

function deleteCommentHandler(event) {
  let id = event.currentTarget.getAttribute("commentId");
  commentsArr = deleteComment(commentsArr, id);
  displayComments();
}

function replyCommentHandler(event) {
  idReply = Number(event.currentTarget.getAttribute("commentId"));
}

function showReplyCommentHandler(event) {
  let id = event.currentTarget.getAttribute("commentId");
  let replies = document.querySelector(`.comment__reply[commentid="${id}"]`);
  let visible = replies.classList.contains("visible");
  let iconVisible = document.querySelector(
    `.showReplyComment[commentid="${id}"] [iconvisible="whenRepliesHidden"]`
  );
  let iconHidden = document.querySelector(
    `.showReplyComment[commentid="${id}"] [iconvisible="whenRepliesVisible"]`
  );
  if (visible) {
    replies.classList.remove("visible");
    iconVisible.classList.remove("hidden");
    iconHidden.classList.add("hidden");
  } else {
    replies.classList.add("visible");
    iconVisible.classList.add("hidden");
    iconHidden.classList.remove("hidden");
  }
}

function addCommentHandler(event) {
  event.preventDefault();
  if (idReply === null) {
    addComment(commentsArr);
  } else {
    addReply(idReply, commentsArr);
  }
  resetCommentForm();
  displayComments();
  idReply = null;
}

btnAddComment.addEventListener("click", addCommentHandler);

///////----INITIALIZE APP ----///////

displayComments();
