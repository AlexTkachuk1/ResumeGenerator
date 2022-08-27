let AddBlock =  document.getElementById('addBlock');
AddBlock.addEventListener("click", function(e){
        e.preventDefault();

        let BlockName = document.getElementById('BlockName').value;
        let Blocks = document.getElementById('Blocks');

        let generalBlock  = document.createElement("div");
        generalBlock.classList.add(BlockName);

        let block  = document.createElement("div");
        block.innerHTML += BlockName;
        generalBlock.append(block);

        let titleName = document.createElement("div");
        titleName.innerHTML = "Имя подзаголовка";
        generalBlock.append(titleName);

        let title = document.createElement("input");
        title.setAttribute("id","title"+BlockName);
        titleName.append(title);

        let input  = document.createElement("input");
        input.setAttribute("type","submit");
        input.setAttribute("value","Add Title");
        input.setAttribute("id","input"+BlockName);
        generalBlock.append(input);
        Blocks.append(generalBlock);

        input.addEventListener("click", function(e){
            e.preventDefault();
            let Title = document.getElementById("title"+ BlockName).value;
            let NewTitle = document.createElement("div");
            NewTitle.innerHTML = Title + ":";
            let NewTitleText = document.createElement("input");
            NewTitleText.setAttribute("id","NewTitleText"+Title);
            NewTitle.append(NewTitleText);
            generalBlock.append(NewTitle);
        });
    });