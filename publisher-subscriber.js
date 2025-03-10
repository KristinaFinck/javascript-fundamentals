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
    _subscriber: {
      click: [],
      focus: [],
    },
    click() {
      this._subscriber['click'].forEach(subscriber => subscriber())
    },
    focus() {
      this._subscriber['focus'].forEach(subscriber => subscriber())
    },
    addEventListener(eventName, subscriber) {
      this._subscriber[eventName].push(subscriber)
    },
    removeEventListener(eventName, subscriber) {
      this._subscriber[eventName] = this._subscriber[eventName].filter(sub => sub !== subscriber)
    },
  }
//Task 1

 function createNewsChannel {
  return {
    _subscribers: [], //array of subscribers (functions)
        subscribe,
        publish
    ,
    subscribe(callback) {
        this._subscriber.push(callback);// add subscriber
    },
    unsubscribe(callback) {
      this._subscribers = this._subscribers.filter(subscriber => subscriber !== callback) //delete subscriber
    },
    publish(news) {
      this._subscribers.forEach(subscriber => subscriber(news))// send news to users
    }
}}
const news = createNewsChannel();

function user1(news) {
  console.log("User1 received:", news);
}

function user2(news) {
  console.log("User2 received:", news);
}

// Подписываем пользователей
news.subscribe(user1);
news.subscribe(user2);

// Отправляем новость
news.publish("Breaking news: JavaScript is awesome!");
// Должно вывести:
// User1 received: Breaking news: JavaScript is awesome!
// User2 received: Breaking news: JavaScript is awesome!

// Отписываем user1
news.unsubscribe(user1);

// Отправляем новость снова
news.publish("New ESNext features are coming!");
// Должно вывести:
// User2 received: New ESNext features are coming!