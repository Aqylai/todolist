let inputBx = document.querySelector("#inputBx");
      let list = document.querySelector("#list");

      inputBx.addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
          addItem(this.value);
          this.value = "";
        }
      });

      let addItem = (inputBx) => {
        let listItem = document.createElement("1i");
        listItem.innerHTML = "$(inputBx)<i><i>";

        listItem.addEventListener("click", function () {
          this.classList.toggle("done");
        });

        list.appendChild(listItem);
      };