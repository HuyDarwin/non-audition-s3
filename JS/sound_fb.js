import { getDatabase, ref, set, update, onValue, remove, get, child } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

$(function () {
	"use strict";

	window.CNKDCGV = window.CNKDCGV || {};

	(function (con) {
		const db = getDatabase();
		
		// Get data
		
    var h;
    var i;
    onValue(ref(db, 'variables'), (snapshot) => {
      h = snapshot.val().round
      i = snapshot.val().win_or_lose
    })
    
		onValue(ref(db, 'commands'), (snapshot) => {
			const data = snapshot.val();
			
			if (data.sound_br_10s_think == 1){
        		con.StopAllSounds(3)
				
        		con.PlaySound("Assets/10%20Seconds%202%20(with%20Double%20Buzzer).mp3", 1);
				update(ref(db, 'commands'), { sound_br_10s_think : 0 });
			}
			if (data.sound_br_10s == 1){
        		con.StopAllSounds(3)
				con.PlaySound("Assets/10%20Seconds%20(with%20Double%20Buzzer).mp3", 1);
				update(ref(db, 'commands'), { sound_br_10s : 0 });
			}

			if (data.sound_stop == 1){
        		con.StopAllSounds();
				update(ref(db, 'commands'), { sound_stop : 0 });
			}
		})
		
	}(window.CNKDCGV = window.CNKDCGV || {}));
});
