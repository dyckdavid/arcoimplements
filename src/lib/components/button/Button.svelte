<script>
    export let text = 'Quote';
  </script>
  
  <button class="button-style">
    {text}
    <span class="triangle"></span>
  </button>
  
  <style>
    .button-style {
      background-color: #FF7A00; /* Specific shade of orange */
      color: white;
      font-weight: bold;
      position: relative;
      padding: 8px 36px 8px 16px; /* Right padding adjusted to prevent text overlap */
      font-size: 16px;
      border: none;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      overflow: hidden; /* Keeps triangle within button boundary */
    }

    .triangle {
      position: absolute;
      right: 1px; /* Small adjustment to create space at the cut edge */
      top: 0;
      bottom: 0;
      width: 20px; /* Maintain triangle width */
      background-color: white;
      clip-path: polygon(100% 0, 4px 50%, 100% 100%);
      /* Adjusted clip-path to start slightly away from the button edge, creating a gap only along the cut */
    }
  </style>
  