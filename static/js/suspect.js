document.getElementById('current-date').innerText = new Date().toLocaleDateString('fr-FR');

        const suspects = [
            { id: 101, name: "Viktor Zima", age: 45, nationality: "Russe", glasses: "Oui", hair: "Blonds", isGuilty: false },
            { id: 102, name: "Lukas Weber", age: 31, nationality: "Allemand", glasses: "Oui", hair: "Blonds", isGuilty: false },
            { id: 103, name: "Yuri Orlov", age: 28, nationality: "Russe", glasses: "Oui", hair: "Blonds", isGuilty: true },
            { id: 104, name: "Alexei Volkov", age: 29, nationality: "Russe", glasses: "Non", hair: "Blonds", isGuilty: false },
            { id: 105, name: "Mikhail Tarasov", age: 25, nationality: "Russe", glasses: "Oui", hair: "Bruns", isGuilty: false },
            { id: 106, name: "Ivan Ivanov", age: 38, nationality: "Russe", glasses: "Non", hair: "Bruns", isGuilty: false }
        ];

        const container = document.getElementById('suspects-container');

        suspects.forEach(suspect => {
            const card = document.createElement('div');
            card.className = 'suspect-card';
            card.id = `suspect-${suspect.id}`;
            
            card.innerHTML = `
                <div class="suspect-header">
                    <div class="mugshot-placeholder">PHOTO<br>NON<br>DISPO</div>
                    <div>
                        <h3>${suspect.name}</h3>
                        <span class="suspect-id">FILE NO. 2024/${suspect.id}</span>
                    </div>
                </div>
                <div class="suspect-info">
                    <div>
                        <span class="info-label">Âge</span>
                        <span class="info-value">${suspect.age} ans</span>
                    </div>
                    <div>
                        <span class="info-label">Nationalité</span>
                        <span class="info-value">${suspect.nationality}</span>
                    </div>
                    <div>
                        <span class="info-label">Lunettes</span>
                        <span class="info-value">${suspect.glasses}</span>
                    </div>
                    <div>
                        <span class="info-label">Cheveux</span>
                        <span class="info-value">${suspect.hair}</span>
                    </div>
                </div>
                <div class="actions">
                    <button class="btn-innocent" onclick="innocenter(${suspect.id})">Écarter</button>
                    <button class="btn-accuse" onclick="accuser(${suspect.id})">Émettre Mandat</button>
                </div>
            `;
            container.appendChild(card);
        });

        function innocenter(id) {
            const card = document.getElementById(`suspect-${id}`);
            card.classList.add('innocent');
            const buttons = card.querySelectorAll('button');
            buttons.forEach(btn => btn.disabled = true);
        }

        function accuser(id) {
            const suspect = suspects.find(s => s.id === id);
            const modal = document.getElementById('result-modal');
            const modalContent = document.getElementById('modal-content');
            const title = document.getElementById('result-title');
            const message = document.getElementById('result-message');

            modal.style.display = 'flex';
            
            // Réinitialiser les classes
            modalContent.className = 'modal-content';

            if (suspect.isGuilty) {
                modalContent.classList.add('success');
                title.innerText = "CIBLE CONFIRMÉE";
                message.innerHTML = `Identification positive. <strong>${suspect.name}</strong> correspond parfaitement à la Notice Rouge.<br><br>✓ Nationalité Russe<br>✓ 28 ans (Entre 20 et 40)<br>✓ Porte des lunettes<br>✓ Cheveux blonds<br><br>Les autorités locales ont été prévenues pour procéder à l'arrestation immédiate.`;
            } else {
                modalContent.classList.add('failure');
                title.innerText = "ERREUR D'IDENTIFICATION";
                message.innerHTML = `Le mandat d'arrêt contre <strong>${suspect.name}</strong> a été rejeté par le secrétariat général.<br><br>L'individu ne correspond pas à l'intégralité des critères de la Notice Rouge. Vos actions ont alerté le véritable suspect qui a eu le temps de fuir.`;
            }
        }