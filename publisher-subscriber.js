// Publisher-Subscriber (Pub/Sub) Pattern 📢🔔

// The Publisher-Subscriber pattern (Pub/Sub) is a messaging pattern where publishers (senders) do not communicate directly with subscribers (receivers). Instead, messages are sent through a central event bus (mediator), allowing multiple subscribers to listen for and react to specific events without knowing the publisher.

// 💡 Key characteristics:

// Decouples senders and receivers.
// Publishers send events/messages.
// Subscribers listen for and react to specific events.
// Used in event-driven systems like message queues, UI event handling, and real-time applications.
// 🔹 Example use cases: WebSockets, event-driven UI updates, microservices communication,
// store.subscribe(function subscriber() {})
// button.addEventListener('click', function subscriber() {})
// setTimeout(function subscriber() {}, 1000)
// promises.then(function subscriber() {})
const button = {
    _subscribers: {
      click: [],
      focus: [],
    },
    click() {
      this._subscribers['click'].forEach(subscriber => subscriber())
    },
    focus() {
      this._subscribers['focus'].forEach(subscriber => subscriber())
    },
    addEventListener(eventName, subscriber) {
      this._subscribers[eventName].push(subscriber)
    },
    removeEventListener(eventName, subscriber) {
      this._subscribers[eventName] = this._subscribers[eventName].filter(sub => sub !== subscriber)
    },
  }
// Task 1: News Channel (Pub/Sub)
function createNewsChannel() {
  return {
      _subscribers: [], // Array of subscribers (functions)

      subscribe(callback) {
          this._subscribers.push(callback); // Add subscriber
      },

      unsubscribe(callback) {
          this._subscribers = this._subscribers.filter(subscriber => subscriber !== callback); // Delete subscriber
      },

      publish(news) {
          this._subscribers.forEach(subscriber => subscriber(news)); // Send news to users
      }
  };
}

// Using the news channel
const news = createNewsChannel();

function user1(news) {
  console.log("User1 received:", news);
}

function user2(news) {
  console.log("User2 received:", news);
}

news.subscribe(user1);
news.subscribe(user2);

news.publish("Breaking news: JavaScript is awesome!");
news.unsubscribe(user1);
news.publish("New ESNext features are coming!");

// Task 2: Notification System
function createNotificationSystem() {
  return {
      _subscribers: [], // List of subscribers

      subscribe(callback) {
          this._subscribers.push(callback); // Add subscriber
      },

      unsubscribe(callback) {
          this._subscribers = this._subscribers.filter(sub => sub !== callback); // Remove subscriber
      },

      notify(message) {
          this._subscribers.forEach(subscriber => subscriber(message)); // Send notification
      }
  };
}

const notifications = createNotificationSystem();

function aliceNotification(msg) {
  console.log("Alice received:", msg);
}

function bobNotification(msg) {
  console.log("Bob received:", msg);
}

notifications.subscribe(aliceNotification);
notifications.subscribe(bobNotification);
notifications.notify("New message: JavaScript is awesome!");
notifications.unsubscribe(bobNotification);
notifications.notify("Another update!");

// Task 3: Event Dispatcher System
function createEventDispatcher() {
  return {
      _events: {}, // Store events and subscribers

      subscribe(eventName, callback) {
          if (!this._events[eventName]) {
              this._events[eventName] = [];
          }
          this._events[eventName].push(callback);
      },

      unsubscribe(eventName, callback) {
          if (this._events[eventName]) {
              this._events[eventName] = this._events[eventName].filter(sub => sub !== callback);
          }
      },

      dispatch(eventName, data) {
          if (this._events[eventName]) {
              this._events[eventName].forEach(subscriber => subscriber(data));
          }
      }
  };
}

// Using the event dispatcher
const dispatcher = createEventDispatcher();

function onUserLogin(data) {
  console.log("User logged in:", data.username);
}

function onUserLogout(data) {
  console.log("User logged out:", data.username);
}

dispatcher.subscribe("login", onUserLogin);
dispatcher.subscribe("logout", onUserLogout);

dispatcher.dispatch("login", { username: "Alice" });  // User logged in: Alice
dispatcher.dispatch("logout", { username: "Bob" });   // User logged out: Bob

dispatcher.unsubscribe("login", onUserLogin);
dispatcher.dispatch("login", { username: "Charlie" }); // No output expected
