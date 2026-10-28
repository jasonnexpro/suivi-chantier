// Suivi Chantier — réception des notifications (V24.19.129).
// Ce fichier tourne en arrière-plan sur le téléphone : il affiche les notifications même quand l'application est fermée.
// Il ne met rien en cache et n'intercepte aucune page.
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

// Toucher une notification affichée par la page (application ouverte) : on revient sur l'application.
self.addEventListener('notificationclick',function(event){
  var d=event.notification&&event.notification.data;
  if(!d||!d.scLink)return; // les notifications envoyées par Firebase sont gérées par Firebase
  event.notification.close();
  event.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(function(list){
    for(var i=0;i<list.length;i++){if(list[i].url.indexOf(self.registration.scope)===0&&'focus' in list[i])return list[i].focus();}
    return self.clients.openWindow(d.scLink);
  }));
});

firebase.initializeApp({apiKey:"AIzaSyBjJ565gjZ0lxOk5x3Fk_2lzFRAbUzqGXo",authDomain:"suivi-chantier-40f33.firebaseapp.com",projectId:"suivi-chantier-40f33",storageBucket:"suivi-chantier-40f33.firebasestorage.app",messagingSenderId:"830512319094",appId:"1:830512319094:web:8caadaf5d1946d95322d57"});
// Application fermée : Firebase affiche lui-même la notification (titre, texte, icône) et ouvre l'application quand on la touche.
firebase.messaging();
